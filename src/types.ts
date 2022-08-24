export type User = {
  name: string,
  id: string,
  avatarUrl: string,
  mail: string,
  isNewUserDraft?: boolean,
}

export type AuthUser = {
  email: string,
  id: string,
}

export type AuthUserRegistrationRequest = AuthUser & {
  password: string,
}
