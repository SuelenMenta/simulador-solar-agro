const cidadesPorEstado = {
    PR: ["Maringá", "Curitiba", "Londrina", "Cascavel", "Ponta Grossa"],
    SP: ["São Paulo", "Campinas", "Ribeirão Preto", "Sorocaba", "Santos"]
  };
  
  function atualizarCidades() {
    const estado = document.getElementById("estado").value;
    const cidadeSelect = document.getElementById("cidade");
    cidadeSelect.innerHTML = "<option value=''>Selecione a Cidade</option>"; // Reseta as opções de cidade
    
    if (estado && cidadesPorEstado[estado]) {
      cidadesPorEstado[estado].forEach(cidade => {
        const option = document.createElement("option");
        option.value = cidade;
        option.textContent = cidade;
        cidadeSelect.appendChild(option);
      });
    }
  }
  
  function selectType(value) {
    document.getElementById('tipo_local').value = value;
    alert('Selecionado: ' + value); // Exibe o valor selecionado
  }
  
  document.getElementById("solarForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const tipoLocal = document.getElementById("tipo_local").value;
    const estado = document.getElementById("estado").value;
    const cidade = document.getElementById("cidade").value;
    const gasto = document.querySelector("input[name='gasto']").value;
  
    if (!tipoLocal || !estado || !cidade || !gasto) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }
  
    const numeroWhatsApp = "5544998353996"; // Número de WhatsApp para simulação
    const mensagem = `Olá! Quero simular um projeto de energia solar.
  
    • Tipo de local: ${tipoLocal}
    • Estado: ${estado}
    • Cidade: ${cidade}
    • Gasto médio mensal: R$ ${gasto}`;
  
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank"); // Abre o link no WhatsApp
  });
  