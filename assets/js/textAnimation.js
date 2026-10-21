 const text = '"Cuidar da mente é um ato de coragem."';
  const el = document.getElementById("typed-text");
  let i = 0;

  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, 90); // velocidade da digitação
    }
  }

  type();