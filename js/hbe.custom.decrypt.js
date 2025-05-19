(() => {
  const container = document.getElementById('hexo-blog-encrypt');
  const data = container?.querySelector('script[data-hbe-encrypted]');
  if (!data) return;

  const encryptedHex = data.innerText.trim();
  const message = container.dataset.message || '密码错误';
  const iv = hexToBuf(encryptedHex.slice(0, 32));
  const encrypted = hexToBuf(encryptedHex.slice(32));

  document.getElementById('hbeUnlock').onclick = async () => {
    const pass = document.getElementById('hbePass').value;
    try {
      const key = await sha256(pass);
      const decrypted = await decryptAES(encrypted, key, iv);
      const decoded = new TextDecoder().decode(decrypted);
      if (!decoded.startsWith('<hbe-prefix>')) throw new Error();
      container.innerHTML = decoded.replace('<hbe-prefix>', '');
    } catch {
      alert(message);
    }
  };

  async function sha256(str) {
    const data = new TextEncoder().encode(str);
    return await crypto.subtle.digest('SHA-256', data);
  }

  async function decryptAES(buf, key, iv) {
    const cryptoKey = await crypto.subtle.importKey('raw', key, { name: 'AES-CBC' }, false, ['decrypt']);
    return await crypto.subtle.decrypt({ name: 'AES-CBC', iv }, cryptoKey, buf);
  }

  function hexToBuf(hex) {
    const bytes = new Uint8Array(hex.length / 2);
    for (let i = 0; i < bytes.length; i++) {
      bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
    }
    return bytes;
  }
})();
