export const MainUrlPaths = {
  getHome: () => "/",
  getMen: () => "/men",
  getWomen: () => "/women",
  getCombos: () => "/combos",
  getJoggers: () => "/joggers",
};

export const AuthUrlPaths = {
  getSignIn: () => "/auth/signin",
  getSignUp: () => "/auth/signup",
  getResetPassword: () => "/auth/reset-password",
  getCreateNewPassword: () => "/auth/create-new-password",
  getCheckEmail: () => "/auth/check-email",
  getVerification: () => "/auth/verification",
};

export const UserUrlPaths = {
  getProfile: () => "/user",
  getFavourites: () => "/user/favourites",
  getBasket: () => "/user/basket",
  // getEdit: (slug: string) => `/user/restaurants/${slug}/edit`,
};


export const DocsUrlPaths = {
  getPrivacy: () => "/privacy-policy",
  getTerms: () => "/terms-of-use",
};


// export const RestaurantUrlPaths = {
//   getAddNew: () => "/restaurant/add",
//   getDetails: (slug: string) => `/restaurant/${slug}`,
//   getAddReview: (slug: string) => `/restaurant/${slug}/review/add`,
// };
