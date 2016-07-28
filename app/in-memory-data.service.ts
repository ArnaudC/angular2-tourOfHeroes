export class InMemoryDataService {
  createDb() {
    let heroes = [
      { id: 1, name:  'Me',           birthday: new Date(2000, 1, 1) },
      { id: 11, name: 'Mr. Nice',     birthday: new Date(2001, 1, 1) },
      { id: 12, name: 'Narco',        birthday: new Date(2002, 1, 1) },
      { id: 13, name: 'Bombasto',     birthday: new Date(2002, 1, 1) },
      { id: 14, name: 'Celeritas',    birthday: new Date(2001, 1, 1) },
      { id: 15, name: 'Magneta',      birthday: new Date(2001, 1, 1) },
      { id: 16, name: 'RubberMan',    birthday: new Date(2004, 1, 1) },
      { id: 17, name: 'Dynama',       birthday: new Date(2004, 1, 1) },
      { id: 18, name: 'Dr IQ',        birthday: new Date(2007, 1, 1) },
      { id: 19, name: 'Magma',        birthday: new Date(2003, 1, 1) },
      { id: 20, name: 'Tornado',      birthday: new Date(2007, 1, 1) }
    ];
    return {heroes};
  }
}
