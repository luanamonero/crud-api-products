enum Message {
  notString = 'Password must be a string',
  invalidPassword = 'Password must be longer than 7 characters',
  emptyPassword = 'Password is required',
  invalidLevel = 'Level must be greater than 0',
  notNumber = 'Level must be a number',
  emptyLevel = 'Level is required',
  invalidClasse = 'Classe must be longer than 2 characters',
  notStingClasse = 'Classe must be a string',
  emptyClasse = 'Classe is required',
  invalidUserName = 'Username must be longer than 2 characters',
  notStringName = 'Username must be a string',
  emptyName = 'Username is required',
  invalidToken = 'Token not foun',
  invalidUSer = 'Username or password invalid',
  notNameString = 'Name must be a string',
  invalidName = 'Name must be longer than 2 characters',
  notStringAmount = 'Amount must be a string',
  invalidAmount = 'Amount must be longer than 2 characters',

}

export default Message; 