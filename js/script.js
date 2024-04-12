(function() {
    let confirmar;

    function boasVindas() {
        alert("Seja bem-vindo(a) ao Habbo Hotel");
    }

    function solicitarNome() {
        return transformarMaiuscula(prompt("Informe seu nome:"));
    }

    function solicitarSenha(nome) {
        let senha;
        do {
            senha = prompt(`Olá, ${nome}. Informe sua senha:`);
            if (isNaN(senha)) {
                alert("A senha deve ser numérica.");
            } else if (senha.length !== 4) {
                alert("A senha deve ter 4 dígitos.");
            } else if (senha !== "2678") {
                alert("Senha incorreta. A senha é: 2678");
            }
        } while (senha !== "2678");
    }

    function transformarMaiuscula(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function reservarQuartos(nome) {
        let quartos = [],
            nomeHospede = [],
            valorTotal = [],
            dias = [],
            count = 0,
            valor;

        do {
            do {
                valor = parseFloat(prompt("Informe o valor da diária: "));
                if (isNaN(valor) || valor <= 0) {
                    alert("Por favor, informe um valor válido.");
                }
            } while (isNaN(valor) || valor <= 0);

            do {
                dias[count] = parseInt(prompt("Informe a quantidade de dias que ficará no quarto:"));
                if (isNaN(dias[count]) || dias[count] <= 0 || dias[count] > 30) {
                    alert("Por favor, informe um número válido de dias (1-30).");
                }
            } while (isNaN(dias[count]) || dias[count] <= 0 || dias[count] > 30);

            valorTotal[count] = valor * dias[count];
            alert(`O valor de ${dias[count]} diárias é de ${valorTotal[count]} R$`);

            do {
                nomeHospede[count] = transformarMaiuscula(prompt("Qual o nome do hóspede?"));
                if (nomeHospede[count] === "") {
                    alert("Por favor, não deixe o campo vazio.");
                }
            } while (nomeHospede[count] === "");

            do {
                let quarto = parseInt(prompt("Qual quarto você deseja? (1-20)"));
                if (isNaN(quarto) || quarto <= 0 || quarto >= 21 || quartos.includes(quarto)) {
                    alert("Quarto inválido ou já reservado. Por favor, selecione outro.");
                } else {
                    quartos[count] = quarto;
                    break;
                }
            } while (true);

            confirmar = confirm(`${nome}, deseja confirmar a hospedagem de ${nomeHospede[count]} por ${dias[count]} dias no quarto ${quartos[count]} por R$${valorTotal[count]}?`);
            if (confirmar) {
                count++;
            }
        } while (confirmar);
    }

    function soletrar() {
        let valor = 0,
            gratuidade = 0,
            meia = 0,
            somaPagantes = 0,
            hospede = "",
            hospedeContagem = 0;

        do {
            valor = parseFloat(prompt("Adicione o valor da reserva: "));
            if (isNaN(valor) || valor <= 0) {
                alert("Por favor, adicione um valor válido.");
            }
        } while (isNaN(valor) || valor <= 0);

        do {
            hospede = transformarMaiuscula(prompt("Informe o nome do hóspede (digite PARE para sair da função):"));
            if (hospede === "") {
                alert("Não é permitido deixar o campo vazio.");
            } else if (hospede === "PARE") {
                break;
            } else {
                do {
                    idade = parseInt(prompt("Adicione a idade do hóspede:"));
                    if (isNaN(idade) || idade <= 0) {
                        alert("Idade inválida. Por favor, adicione um número válido.");
                    }
                } while (isNaN(idade) || idade <= 0);

                hospedeContagem++;

                if (idade <= 6) {
                    gratuidade++;
                    alert(`${hospede} cadastrado(a) com sucesso. ${hospede} possui gratuidade.`);
                } else if (idade >= 60) {
                    meia++;
                    somaPagantes += (valor / 2);
                    alert(`${hospede} cadastrado(a) com sucesso. ${hospede} pagará meia.`);
                } else {
                    somaPagantes += valor;
                    alert(`${hospede} cadastrado(a) com sucesso.`);
                }
            }
        } while (hospede !== "PARE" || hospede === "");

        alert(`${nome}, o valor total das hospedagens é de ${somaPagantes} R$. Possuindo ${hospedeContagem} hóspedes, onde ${meia} pagam meia e ${gratuidade} têm gratuidade.`);
    }

    function escolherComSoletra() {
        let hospedes = [],
            escolha = "",
            hospede = "";

        do {
            escolha = prompt(`Faça sua escolha:
1 - Cadastrar hóspedes
2 - Pesquisar hóspede
3 - Listar hóspedes
4 - Sair`);

            switch (escolha) {
                case "1":
                    if (hospedes.length < 15) {
                        do {
                            hospede = transformarMaiuscula(prompt("Adicione o nome do hóspede:"));
                            if (hospede === "") {
                                alert("Por favor, preencha o campo.");
                            }
                        } while (hospede === "");
                        hospedes.push(hospede);
                        alert("Hóspede cadastrado com sucesso.");
                    } else {
                        alert("O limite de hóspedes foi atingido.");
                    }
                    break;
                case "2":
                    hospede = transformarMaiuscula(prompt("Informe o nome do hóspede para busca:"));
                    if (hospedes.includes(hospede)) {
                        alert(`${hospede} foi encontrado(a) no sistema.`);
                    } else {
                        alert("Hóspede não cadastrado no sistema.");
                    }
                    break;
                case "3":
                    alert("Hóspedes cadastrados:\n" + hospedes.join("\n"));
                    break;
                case "4":
                    break;
                default:
                    alert("Por favor, selecione uma das opções.");
                    break;
            }
        } while (escolha !== "4");
    }

    function agendarEvento(nome) {
        let convidados = 0,
            cadeiras = 0,
            diaSemana = "",
            horario = 0,
            nomeEmpresa = "",
            garcom = 0,
            limiteEvento = 0,
            horaEvento = 0,
            valorGarcom = 0,
            cafe = 0,
            agua = 0,
            salgado = 0,
            valorCafe = 0,
            valorAgua = 0,
            valorsalgado = 0,
            valorBuffet,
            count = 0,
            confirmar = null,
            auditorio = "";
    
        do {
            convidados = parseInt(prompt("Adicione a quantidade de convidados:"));
            if (isNaN(convidados) || convidados <= 0 || convidados > 350) {
                alert("Por favor, adicione um número válido de convidados (1-350).");
            } else if (convidados <= 150) {
                auditorio = "laranja";
                alert(`Use o auditório ${auditorio}.`);
            } else if (convidados > 150 && convidados <= 220) {
                cadeiras = convidados - 150;
                auditorio = "laranja";
                alert(`Use o auditório ${auditorio} e adicione ${cadeiras} cadeiras.`);
            } else {
                auditorio = "colorado";
                alert(`Use o auditório ${auditorio}.`);
            }
        } while (isNaN(convidados) || convidados <= 0 || convidados > 350);
    
        do {
            diaSemana = transformarMaiuscula(prompt("Em qual dia da semana ocorrerá o evento? (Ex: segunda, terça, etc.)"));
            switch (diaSemana) {
                case "Segunda":
                case "Terça":
                case "Quarta":
                case "Quinta":
                case "Sexta":
                    limiteEvento = 23;
                    do {
                        horario = parseInt(prompt("Informe o horário do evento (0-23):"));
                        if (isNaN(horario) || horario < 0 || horario > 23) {
                            alert("Por favor, informe um horário válido (0-23).");
                        } else if (horario < 7 || horario > 23) {
                            alert("Não trabalhamos nesse horário.");
                        }
                    } while (isNaN(horario) || horario < 7 || horario > 23);
                    break;
                case "Sábado":
                case "Domingo":
                    limiteEvento = 15;
                    do {
                        horario = parseInt(prompt("Informe o horário do evento (0-15):"));
                        if (isNaN(horario) || horario < 0 || horario > 15) {
                            alert("Por favor, informe um horário válido (0-15).");
                        } else if (horario < 7 || horario > 15) {
                            alert("Não trabalhamos nesse horário.");
                        }
                    } while (isNaN(horario) || horario < 7 || horario > 15);
                    break;
                default:
                    alert("Dia da semana informado não existe.");
            }
        } while (count === 0);
    
        do {
            horaEvento = parseInt(prompt("Qual será a duração do evento em horas?"));
            let limite = horario + horaEvento;
            if (isNaN(horaEvento) || horaEvento <= 0 || limite > limiteEvento) {
                alert("Por favor, informe uma duração válida e dentro do horário de funcionamento.");
            }
        } while (isNaN(horaEvento) || horaEvento <= 0 || limite > limiteEvento);
    
        garcom = Math.ceil(convidados / 12);
        garcom += Math.ceil(horaEvento / 2);
        valorGarcom = horaEvento * 10.50 * garcom;
        alert(`Serão necessários ${garcom} garçons. O custo será de R$ ${valorGarcom}.`);
    
        cafe = Math.ceil(0.2 * convidados);
        agua = Math.ceil(0.5 * convidados);
        salgado = Math.ceil(7 * convidados / 100) * 100;
        valorCafe = cafe * 0.8;
        valorAgua = agua * 0.4;
        valorsalgado = salgado / 100 * 34;
        valorBuffet = valorAgua + valorCafe + valorsalgado;
    
        alert(`O evento precisará de ${cafe}L de café, ${agua}L de água e ${salgado} unidades de salgados.`);
        confirmar = confirm(`DADOS PARA FINALIZAR RESERVA:
    Evento no Auditório: ${auditorio}
    Nome da Empresa: ${nomeEmpresa}
    Data: ${diaSemana}, ${horario}h às ${limite}
    Duração do Evento: ${horaEvento}h
    Quantidade de Garçons: ${garcom}
    Quantidade de Convidados: ${convidados}
    
    Custo dos garçons: R$ ${valorGarcom}
    Custo do buffet: R$ ${valorBuffet}
    
    Valor total do Evento: R$ ${valorGarcom + valorBuffet}`);
    
        if (confirmar) {
            alert(`${nome}, reserva efetuada com sucesso.`);
        } else {
            alert("Reserva não efetuada. Voltando ao menu do sistema.");
        }
    }

    function escolherAlcoolOuGasolina(nome) {
        let postoWayneAlcool = 0,
            postoWayneGasolina = 0,
            postoStarkGasolina = 0,
            postoStarkAlcool = 0,
            diferenca = 0;
    
        do {
            postoWayneAlcool = parseFloat(prompt("Adicione o valor do álcool no posto Wayne Oil:"));
            if (isNaN(postoWayneAlcool) || postoWayneAlcool <= 0) {
                alert("Por favor, informe um valor válido.");
            }
        } while (isNaN(postoWayneAlcool) || postoWayneAlcool <= 0);
    
        do {
            postoWayneGasolina = parseFloat(prompt("Adicione o valor da gasolina no posto Wayne Oil:"));
            if (isNaN(postoWayneGasolina) || postoWayneGasolina <= 0) {
                alert("Por favor, informe um valor válido.");
            }
        } while (isNaN(postoWayneGasolina) || postoWayneGasolina <= 0);
    
        do {
            postoStarkAlcool = parseFloat(prompt("Adicione o valor do álcool no posto Stark Petrol:"));
            if (isNaN(postoStarkAlcool) || postoStarkAlcool <= 0) {
                alert("Por favor, informe um valor válido.");
            }
        } while (isNaN(postoStarkAlcool) || postoStarkAlcool <= 0);

        do {
            postoStarkGasolina = parseFloat(prompt("Adicione o valor do gasolina no posto Stark Petrol:"));
            if (isNaN(postoStarkGasolina) || postoStarkGasolina <= 0) {
                alert("Por favor, informe um valor válido.");
            }
        } while (isNaN(postoStarkGasolina) || postoStarkGasolina <= 0);
    
        if (postoWayneGasolina <= postoStarkGasolina) {
            diferenca = postoWayneGasolina - postoWayneGasolina * 0.3;
            if (postoWayneAlcool <= diferenca) {
                alert(`${nome}, é mais barato abastecer com álcool no posto Wayne Oil.`);
            } else {
                alert(`${nome}, é mais barato abastecer com gasolina no posto Wayne Oil.`);
            }
        } else {
            diferenca = postoStarkGasolina - postoStarkGasolina * 0.3;
            if (postoStarkAlcool < diferenca) {
                alert(`${nome}, é mais barato abastecer com álcool no posto Stark Petrol.`);
            } else {
                alert(`${nome}, é mais barato abastecer com gasolina no posto Stark Petrol.`);
            }
        }
    }
    
    function arPuroFinalmente(nome) {
        let local = prompt("Em qual local você gostaria de verificar a qualidade do ar?");
        
        // Simulação da verificação da qualidade do ar
        let qualidadeAr = Math.random(); // Gerando um valor aleatório para simular a qualidade do ar
    
        let mensagem = `${nome}, a qualidade do ar em ${local} é `;
    
        if (qualidadeAr < 0.3) {
            mensagem += "ótima! O ar está fresco e limpo.";
        } else if (qualidadeAr >= 0.3 && qualidadeAr < 0.7) {
            mensagem += "razoável. Pode haver alguma poluição no ar.";
        } else {
            mensagem += "ruim. Recomendamos evitar permanecer muito tempo nessa área.";
        }
    
        alert(mensagem);
    }

    function hotel() {
        let sair = false;
        let nome = solicitarNome();
        boasVindas();
        solicitarSenha(nome);

        do {
            let escolha = prompt(`Funções do Habbo Hotel
1 - Reservar quartos
2 - Como soletra?
3 - Com "S" ou com "Z"?
4 - Agendar eventos
5 - Álcool ou gasolina?
6 - Ar puro, finalmente
7 - Sair`);

            switch (escolha) {
                case "1":
                    reservarQuartos(nome);
                    break;
                case "2":
                    soletrar();
                    break;
                case "3":
                    escolherComSoletra();
                    break;
                case "4":
                    agendarEvento(nome);
                    break;
                case "5":
                    escolherAlcoolOuGasolina(nome);
                    break;
                case "6":
                    arPuroFinalmente(nome);
                    break;
                case "7":
                    alert(`Obrigado por utilizar o Habbo Hotel, ${nome}!`);
                    sair = true;
                    break;
                default:
                    alert("Escolha inválida. Por favor, selecione uma das opções.");
            }
        } while (!sair);
    }

    // Chamada da função principal
    hotel();
})();
