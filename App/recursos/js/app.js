/******************************
 * Toogle da Adicao de Memoria
 ******************************/

const pagAddMemoria = document.querySelector('.add_page');
const pagMemoria = document.querySelector('.memory_page');

//Verificacao se existe pagAddMemoria
if (pagAddMemoria && pagMemoria) {
	pagAddMemoria.style.visibility = 'hidden';
	pagMemoria.style.visibility = 'hidden';

	document
		.querySelector('.btn_add_memoria')
		.addEventListener('click', function () {
			pagAddMemoria.style.visibility = 'visible';
		});

	document
		.querySelector('.btn_memoria')
		.addEventListener('click', function () {
			pagMemoria.style.visibility = 'visible';
		});

	document.querySelector('.btn_add').addEventListener('click', function () {
		pagAddMemoria.style.visibility = 'hidden';
	});
	document.querySelector('.btn_volta1').addEventListener('click', function () {
		console.log('Hello');
		pagAddMemoria.style.visibility = 'hidden';
	});

	document.querySelector('.btn_volta2').addEventListener('click', function () {
		console.log('Hello');
		pagMemoria.style.visibility = 'hidden';
	});
}

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

/*--------------------------------
---- Modulo de Memoria -----------
--------------------------------*/
var memoryController = (function () {
	// Objeto de Memoria
	var Memory = function (id, title, description, date) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.date = date;
	};

	// Armazem de todas as memorias
	var data = {
		allMemories: [],
		total: 0,
	};

	/*----------
	* Publico --
	----------*/
	return {
		////////////////////////////////////////////////
		/* Adiciona uma memoria nova ao armazenamento */
		addMemoria: function (title, desc, date) {
			var newMemory, ID;

			/* Atribui novo ID */
			if (data.allMemories.length > 0) {
				ID = data.allMemories[data.allMemories.length - 1].id + 1;
			} else {
				ID = 0;
			}

			/* Cria o Objeto*/
			newMemory = new Memory(ID, title, desc, date);

			/* Armazena o item */
			data.allMemories.push(newMemory);

			/* Retorna o novo elemento */
			return newMemory;
		},
		/////////////////////////////////////////
		/* Remove uma memoria do armazenamento */
		deleteMemoria: function (id) {
			var ids, index;

			// Armazena todos os IDs
			ids = data.allMemories.map(function (cur) {
				return cur.id;
			});

			// Localiza o ID para remover
			index = ids.indexOf(id);

			// Remove o item
			if (index !== -1) {
				data.allMemories.splice(index, 1);
			}
		},
		////////////////////////////////////////
		/* Retorna todos os dados armazenados */
		getMemories: function () {
			return {
				memories: data.allMemories,
				total: data.total,
			};
		},
	};
})();

/*--------------------------------
---- Modulo de UI ----------------
--------------------------------*/
var UIController = (function () {
	// Todos os Objetos DOM
	var DOMstrings = {
		/* Listar todos os elementos necessarios */
	};

	/*----------
	* Publico --
	----------*/
	return {
		///////////////////////////////////////////////
		/* Pega todas as informacoes dos formularios */
		getInput: function () {
			return {
				//DOMtitle: document.querySelector(DOMstrings./*TITULO*/).value,
				//DOMdescription: document.querySelector(DOMstrings./*DESCRICAO*/).value
			};
		},
		///////////////////////////////////
		/* Coloca a nova memoria na tela */
		addListItem: function (obj) {
			var html, element;

			// Cria string html com um placeholder %_%
			//DOMelement = DOMstrings./*conteinerDasMemorias*/;
			html = ''; // ??Criar string html, usar como base: <div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>

			// Trocar o placeholder por dados
			html = html.replace('%id%', obj.id);
			html = html.replace('%description%', obj.description);
			html = html.replace('%title%', obj.title);

			// Inserir o HTML ao DOM
			document.querySelector(element).insertAdjacentHTML('beforeend', html);
		},
		deleteListItem: function (selectorID) {
			// Selecionamos o elemento pai, depois deletamos o filho
			var el = document.getElementById(selectorID);
			el.parentNode.removeChild(el);
		},
		////////////////////////////
		/* Remove memoria da tela */
		deleteListItem: function (selectorID) {
			// Selecionamos o elemento pai, depois deletamos o filho
			var el = document.getElementById(selectorID);
			el.parentNode.removeChild(el);
		},
		/////////////////////////////////////////////////////////
		/* Ao final do input do usuario, limpar os formularios */
		clearFields: function () {
			var fields;
			// Selecionando os campos para limpar | Retorna uma lista
			//DOMfields = document.querySelectorAll(DOMstrings./*DESCRICAO*/ + ',' + DOMstrings./*TITULO*/);

			// Transforma a lista em um vetor
			var fieldsArr = Array.prototype.slice.call(fields);

			// Percorre o vetor, passa uma funcao callback que pode receber 3 argumentos
			fieldsArr.forEach(function (current, index, array) {
				current.value = '';
			});

			// Coloca o primeiro elemento (discricao) em foco
			fieldsArr[0].focus();
		},
		//////////////////////////////
		/* Retorna as string do DOM */
		getDOMstrings: function () {
			return DOMstrings;
		},
	};
})();

/*--------------------------
---- Modulo Controlador ----
--------------------------*/
var controller = (function (memoryCtrl, UICtrl) {
	/*
	 * !!! INCACABADO !!!
	 */

	/*----------
	* Publico --
	----------*/
	return {
		init: function () {
			console.log('App iniciated.');
			/* RESTO DO INIT*/
		},
	};
})(memoryController, UIController);

// Inicia todo o codigo
controller.init();
