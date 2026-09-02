export type UserAccount = {
  id: string;
  createdAt: Date;
  email: string;
  passwordHash: string;
  profile: {
    bio: string;
    avatarUrl: string;
  };
};

export class UserRegistry {
  private users: Record<string, UserAccount> = {};

  public registerUser(
    data: Omit<UserAccount, 'id' | 'createdAt'>,
  ): UserAccount {
    const newUser: UserAccount = {
      ...data, id: Math.random().toString(36).substring(2, 10), createdAt: new Date(),
    };
    
    this.users[newUser.id] = newUser;

    return newUser;
  }

  public getUserView(
    id: string,
  ): Readonly<Pick<UserAccount, 'id' | 'email' | 'profile'>> | undefined {
    const user = this.users[id];

    if (!user) {
      return undefined;
    }

    return {
      id: user.id,
      email: user.email,
      profile: user.profile,
    };
  }
}
