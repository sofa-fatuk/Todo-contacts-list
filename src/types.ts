export type Contact = {
  name: string,
  id: string,
  avatarUrl: string,
  mail: string,
  isNewContactDraft?: boolean,
}

export type AuthUser = {
  email: string,
  id: string,
}

export type AuthUserRegistrationRequest = AuthUser & {
  password: string,
}
