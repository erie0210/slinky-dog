export class User {
  private name: string;
  private isFollowing: boolean;

  constructor(name: string, isFollowing: boolean) {
    this.name = name;
    this.isFollowing = isFollowing;
  }

  static withFollowing(name: string) {
    return new User(name, true);
  }

  toggleFollowingStatus() {
    this.isFollowing = !this.isFollowing;
  }

  updateFollowingStatus(follow: boolean) {
    this.isFollowing = follow;
  }
}
