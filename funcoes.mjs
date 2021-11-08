function mostraIdade(nome, idade){
  return `A idade de ${nome} é ${idade}`;
}

function mostraCidade(nome, cidade){
  return `A Cidadee de ${nome} é ${cidade}`; 
}

function mostraHobby(nome, Hobby){
  return `O Hobby de ${nome} é ${Hobby}`;
}
// tem que ter o export no arquivo onde desejo exportar pra ser possivel realizar a ação
export{
  mostraIdade,
  mostraCidade,
  mostraHobby
};