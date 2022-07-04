/*
Link para confirmação da saída: https://www.invertexto.com/codigo-binario
*/
// ** Texto a ser convertido **
const myText = 'Oi, tudo bem? Meu nome eh Rafael. Hoje eh dia 03/07/2022, 21:15 horario de brasilia.';

/* Tabela ASCII para referencia do index.
32	 	33	!	34	"	35	#	36	$	37	%	38	&	39	'	40	(	41	)	42	*	
43	+	44	,	45	-	46	.	47	/	48	0	49	1	50	2	51	3	52	4	53	5	54	6	
55	7	56	8	57	9	58	:	59	;	60	<	61	=	62	>	63	?	64	@	65	A	66	B	
67	C	68	D	69	E	70	F	71	G	72	H	73	I	74	J	75	K	76	L	77	M	78	N	
79	O	80	P	81	Q	82	R	83	S	84	T	85	U	86	V	87	W	88	X	89	Y	90	Z	
91	[	92	\	93	]	94	^	95	_	96	`	97	a	98	b	99	c	100	d	101	e	102	f	
103	g	104	h	105	i	106	j	107	k	108	l	109	m	110	n	111	o	112	p	113	q	114	r	
115	s	116	t	117	u	118	v	119	w	120	x	121	y	122	z	123	{	124	|	125	}	126	~
*/

//Tabela ASCII.
const ascii = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*',
    '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6',
    '7', '8', '9', ':', ';', '<', '=', '>', '?', '@', 'A', 'B',
    'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '[', '\\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~'];

//Verifica se o texto pode ser convertido, então executa a conversão ou retorna um erro.
const textCheck = text => {
    const tempArr = text.split(''); //Separa o texto em um array.
    const verification = []; //Array para o resultado da comparação.

    //Comparação de cada letra no texto.
    tempArr.forEach(element => {
        const compare = ascii.includes(element); //Retorna true ou false.
        verification.push(compare); //Adiciona o resultado na array.
    })
    //Executa a conversão para binário ou retorna um erro.
    verification.includes(false) ? console.log('O texto não pode ser convertido.') : convertText(tempArr);
}

//Função de conversão para binário.
const convertText = textArr => {
    const asciiIndex = [] //Conversão do texto em número inteiro.

    //Conversão do texto para número inteiro.
    textArr.forEach(element => {
        let index = ascii.indexOf(element); //Converte cada letra no número de index da tabela ascii.
        index += 32; //Adiciona 32 ao index para a conversão correta em binário.
        asciiIndex.push(index); //Adiciona o número na array.
    })
    //Conversão do número inteiro para binário junto com transcrição para 8 bits.
    const binArr = asciiIndex.map(num => num.toString(2).padStart(8, '0'));

    //Imprime a conversão na tela.
    console.log(binArr.join(' '));
}

//Chamada da função para execução do código.
textCheck(myText);