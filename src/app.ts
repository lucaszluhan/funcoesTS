let acessoAoSite = (): void => {
   alert('Bem-vindo ao site.');
};
acessoAoSite();

let mostrarMensagem = (): void => {
   let nomeAplicacao = 'Aplicacaozinha';
   console.log(`Acesso a aplicação ${nomeAplicacao}.`);
   alert(`Bem vindo a aplicação tal ${nomeAplicacao}.`);
};
mostrarMensagem();

let mostrarDobroNum = (num: number): void => {
   let dobro = num * 2;
   alert(`O dobro de ${num} é ${dobro}.`);
};
mostrarDobroNum;

let boasVindas = (nome: string): void => {
   alert(`${nome}, seja bem vindo.`);
};
boasVindas('Lucas');

let calcularMedia = (n1: number, n2: number, n3: number, nome: string) => {
   let media = ((n1 + n2 + n3) / 3).toFixed(2);
   alert(`${nome}, sua média é ${media}.`);
   console.log(`Nota1: ${n1}, Nota2:${n2}, Nota3: ${n3}`);
};
calcularMedia(90, 70, 85, 'Lucas');
