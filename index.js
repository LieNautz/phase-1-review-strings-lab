// Write your code in this file!
// describe('index.js', () => {
//     describe('currentUser', () => {
//       it('is defined', () => {
//         expect(currentUser, "The 'currentUser' variable must contain a string").to.be.a('string');
//         expect(currentUser, "You need to modify the value of the 'currentUser' variable").to.not.be.empty;
//       });
//     });
  
//     describe('welcomeMessage', () => {
//       it('contains "Welcome to Flatbook, "', () => {
//         expect(welcomeMessage).to.have.string('Welcome to Flatbook, ');
//       });
  
//       it("contains the value of the 'currentUser' variable", () => {
//         expect(welcomeMessage).to.have.string(currentUser);
//       });
  
//       it('ends with an exclamation point!', () => {
//         expect(welcomeMessage.substr(-1)).to.eq('!');
//       });
//     });

const currentUser = "John";

const firstInitial = "J";

const upperCaseCurrentUser= currentUser

const welcomeMessage= "Welcome to Flatbook, " + currentUser + "!";

const excitedWelcomeMessage= "WELCOME TO FLATBOOK, ", ${currentUser.toLocaleUpperCase()} ,"!"

const shortGreeting = "Welcome, " + firstInitial + "!"

