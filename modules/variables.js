export const numberOfEmployees = 12;
export const someEnglishSpeakingCountries = ['au', 'ca', 'gb', 'us'];
export const randomNationality = someEnglishSpeakingCountries[Math.floor(Math.random() * someEnglishSpeakingCountries.length)];
export const dataKeys = ['nat', 'picture', 'name', 'email', 'location', 'cell', 'dob'];
export const apiUrl = `https://randomuser.me/api/?results=${numberOfEmployees}&inc=${dataKeys.join()}&nat=${randomNationality}&noinfo`;
