<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>(() => {
  'use strict';

  const cryptoObj = window.crypto || window.msCrypto;
  const storage = window.localStorage;
  const storageName = 'hexo-blog-encrypt:#' + window.location.pathname;

  function hexToArray(s) {
    return new Uint8Array(s.match(/[\da-f]{2}/gi).map(h => parseInt(h, 16)));
  }

  function arrayBufferToHex(buffer) {
    return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
  }

  async function getKeyMaterial(password) {
    const encoder = new TextEncoder();
    return cryptoObj.subtle.importKey('raw', encoder.encode(password), 'PBKDF2', false, ['deriveKey', 'deriveBits']);
  }

  function getKey(keyMaterial, salt) {
    return cryptoObj.subtle.deriveKey({
      name: 'PBKDF2',
      salt: salt,
      iterations: 100000,
      hash: 'SHA-256'
    }, keyMaterial, {
      name: 'AES-CBC',
      length: 256,
    }, false, ['decrypt']);
  }

  async function decrypt(password, encryptedHex) {
    const iv = hexToArray(encryptedHex.slice(0, 32));
    const encryptedData = hexToArray(encryptedHex.slice(32));

    const keyMaterial = await getKeyMaterial(password);
    const key = await getKey(keyMaterial, iv);

    try {
      const decrypted = await cryptoObj.subtle.decrypt({ name: 'AES-CBC', iv: iv }, key, encryptedData);
      const decoded = new TextDecoder().decode(decrypted);
      if (!decoded.startsWith('<hbe-prefix></hbe-prefix>')) throw new Error("Wrong prefix");
      return decoded.slice('<hbe-prefix></hbe-prefix>'.length);
    } catch (e) {
      alert('🔐 密码错误，请重试');
      throw e;
    }
  }

  async function showContent(password, encrypted) {
    const decrypted = await decrypt(password, encrypted);
    const wrapper = document.getElementById('hexo-blog-encrypt');
    wrapper.innerHTML = decrypted;
    window.localStorage.setItem(storageName, password);
  }

  const wrapper = document.getElementById('hexo-blog-encrypt');
  const script = wrapper.querySelector('script[data-hbe-encrypted]');
  const encrypted = script.innerText;

  const fromStorage = storage.getItem(storageName);
  if (fromStorage) {
    showContent(fromStorage, encrypted);
  }

  document.getElementById('hbeUnlock').addEventListener('click', () => {
    const password = document.getElementById('hbePass').value;
    showContent(password, encrypted);
  });
})();