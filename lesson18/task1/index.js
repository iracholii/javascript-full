export const event = {
  message: 'Wellcome to the party!',
  guests: [
    {
      name: 'John',
      age: 18,
      email: 'example@server.com',
    },
  ],
  getInvitations() {
    return this.guests
      .filter(el => el.age >= 18)
      .map(({ email, name }) => ({ email, message: `Dear ${name}! ${this.message}` }));
  },
};

console.log(event.getInvitations());
