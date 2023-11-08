"use client";

import { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import LogoIMG from "./static/Logo.svg";
import { FiMenu } from "react-icons/fi";
import { TbX } from "react-icons/tb";
import { Container } from "@/common/ui/Container";
import { ButtonBase } from "@/common/ui";
import { AutocompleteSearchInput } from "@/common/AutocompleteSearchInput";
import { PageLink } from "./PageLink";
import { MainUrlPaths, AuthUrlPaths } from "@/helpers/urlconf";
import clsx from "clsx";
import { UserLink } from "./UserLink";
import { FavouritesIcon } from "./static/FavouritesIcon";
import { UserIcon } from "./static/UserIcon";
import { BasketIcon } from "./static/BasketIcon";
import { UserUrlPaths } from "@/helpers/urlconf";
import { LinkButton } from "@/common/ui";
import { useRouter } from "next/navigation";

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [user, setUser] = useState(true);
  const router = useRouter()

  return (
    <header className="py-8">
      <Container>
        <div className={"flex items-center justify-between gap-3"}>
          <Link
            className="cursor-pointer focus:outline-none"
            href={MainUrlPaths.getHome()}
          >
            <Image src={LogoIMG} alt={"Logo"} priority={true} />
          </Link>
          <nav>
            <ul className="flex-wrap gap-y-0 gap-x-4 lg:gap-x-10 items-center justify-center text-xl font-medium text-gray-500 hidden select-none md:flex">
              <li>
                <PageLink href={MainUrlPaths.getHome()}>Shop</PageLink>
              </li>
              <li>
                <PageLink href={MainUrlPaths.getMen()}>Men</PageLink>
              </li>
              <li>
                <PageLink href={MainUrlPaths.getWomen()}>Women</PageLink>
              </li>
              <li>
                <PageLink href={MainUrlPaths.getCombos()}>Combos</PageLink>
              </li>
              <li>
                <PageLink href={MainUrlPaths.getJoggers()}>Joggers</PageLink>
              </li>
            </ul>
          </nav>
          <AutocompleteSearchInput />
          {user && (
            <ul className="hidden md:flex items-center justify-between gap-3">
              <li>
                <UserLink href={UserUrlPaths.getFavourites()}>
                  {<FavouritesIcon />}
                </UserLink>
              </li>
              <li>
                <Menu
                  as={"div"}
                  className="relative text-left focus:outline-none"
                >
                  {({ open, close }) => (
                    <>
                      <Menu.Button
                        className={clsx(
                          "transition-shadow duration-200 p-3 rounded-lg focus:outline-none",
                          {
                            "bg-violet-500 stroke-white": open,
                            "bg-gray-100 stroke-gray-500 hover:shadow-md":
                              close,
                          }
                        )}
                      >
                        <UserIcon />
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          as={"ul"}
                          className="absolute overflow-hidden right-0 mt-2 w-40 py-1 origin-top-right divide-y divide-gray-300 rounded-lg bg-gray-100 shadow-lg focus:outline-none z-50"
                        >
                          <Menu.Item as={"li"}>
                            {({ active }) => (
                              <PageLink
                                href={UserUrlPaths.getProfile()}
                                onClick={() => {
                                  setMenuIsOpen(false);
                                  close();
                                }}
                                additionalClassNames={clsx(
                                  "block p-1 pl-6 pr-4 cursor-default transition-colors duration-200",
                                  {
                                    "bg-violet-300 text-white hover:text-white":
                                      active,
                                  }
                                )}
                              >
                                Profile
                              </PageLink>
                            )}
                          </Menu.Item>
                          <Menu.Item as={"li"}>
                            {({ active }) => (
                              <ButtonBase
                                onClick={() => {
                                  setMenuIsOpen(false);
                                  setUser(false);
                                  //   logout.mutate();
                                }}
                                className={{
                                  button: clsx(
                                    "w-full text-left p-1 pl-6 pr-4 cursor-default transition-colors duration-200",
                                    {
                                      "bg-violet-300 text-white hover:text-white ":
                                        active,
                                    }
                                  ),
                                }}
                              >
                                Logout
                              </ButtonBase>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </li>
              <li>
                <UserLink href={UserUrlPaths.getBasket()}>
                  {<BasketIcon />}
                </UserLink>
              </li>
            </ul>
          )}
          {!user && (
            <div className="hidden md:flex items-center justify-between gap-7">
              <LinkButton href={AuthUrlPaths.getSignIn()} onClick={() => setUser(true)}>Login</LinkButton>
              <LinkButton href={AuthUrlPaths.getSignUp()} className={{button: "whitespace-nowrap"}}>Sign Up</LinkButton>
            </div>
          )}

          <div
            className={clsx(
              "fixed md:hidden bottom-0 right-0 top-0 z-40 flex min-w-[200px] flex-col items-stretch gap-y-3 bg-gray-100 p-2 pt-10 shadow-xl transition-transform",
              {
                "translate-x-full": !menuIsOpen,
              }
            )}
          >
            <ButtonBase
              className={{
                button: "absolute right-3 top-3 appearance-none md:hidden",
              }}
              onClick={() => setMenuIsOpen(false)}
            >
              <TbX
                className={
                  "h-7 w-7 text-gray-500 hover:text-gray-700 focus:text-violet-500"
                }
              />
            </ButtonBase>
            <nav>
              <ul
                className={
                  "flex flex-col gap-y-3 text-xl font-medium pb-3 text-gray-500 select-none"
                }
              >
                <li>
                  <PageLink
                    onClick={() => setMenuIsOpen(false)}
                    href={MainUrlPaths.getHome()}
                  >
                    Shop
                  </PageLink>
                </li>
                <li>
                  <PageLink
                    onClick={() => setMenuIsOpen(false)}
                    href={MainUrlPaths.getMen()}
                  >
                    Men
                  </PageLink>
                </li>
                <li>
                  <PageLink
                    onClick={() => setMenuIsOpen(false)}
                    href={MainUrlPaths.getWomen()}
                  >
                    Women
                  </PageLink>
                </li>
                <li>
                  <PageLink
                    onClick={() => setMenuIsOpen(false)}
                    href={MainUrlPaths.getCombos()}
                  >
                    Combos
                  </PageLink>
                </li>
                <li>
                  <PageLink
                    onClick={() => setMenuIsOpen(false)}
                    href={MainUrlPaths.getJoggers()}
                  >
                    Joggers
                  </PageLink>
                </li>
              </ul>

              {user && (
                <>
                  <ul className="flex gap-x-3 items-center justify-between border-t border-t-gray-400 py-2">
                    <li>
                      <UserLink
                        href={UserUrlPaths.getFavourites()}
                        onClick={() => setMenuIsOpen(false)}
                      >
                        {<FavouritesIcon />}
                      </UserLink>
                    </li>
                    <li>
                      <UserLink
                        href={UserUrlPaths.getProfile()}
                        onClick={() => setMenuIsOpen(false)}
                      >
                        {<UserIcon />}
                      </UserLink>
                    </li>
                    <li>
                      <UserLink
                        href={UserUrlPaths.getBasket()}
                        onClick={() => setMenuIsOpen(false)}
                      >
                        {<BasketIcon />}
                      </UserLink>
                    </li>
                  </ul>
                  <div className="border-t border-gray-400 pt-3 text-xl font-medium select-none transition-colors duration-200 hover:text-violet-500">
                    <ButtonBase
                      onClick={() => {
                        setMenuIsOpen(false);
                        setUser(false);
                        router.push(MainUrlPaths.getHome())
                        //   logout.mutate();
                      }}
                      className={{
                        button: "appearance-none w-full text-left",
                        loadingIcon: "mx-auto",
                      }}
                    >
                      Logout
                    </ButtonBase>
                  </div>
                </>
              )}
              {!user && (
                <div
                  className={
                    "border-t border-gray-400 pt-3 text-xl font-medium select-none transition-colors duration-200 hover:text-violet-500"
                  }
                >
                  <ButtonBase
                    onClick={() => {
                      setMenuIsOpen(false);
                      setUser(true);
                      router.push(AuthUrlPaths.getSignIn())
                      // setAuthTabType(AuthTabType.LOGIN);
                    }}
                    className={{
                      button: "appearance-none",
                    }}
                  >
                    Login
                  </ButtonBase>
                </div>
              )}
            </nav>
          </div>

          <ButtonBase
            type={"button"}
            className={{
              button: "block appearance-none md:hidden",
            }}
            onClick={() => setMenuIsOpen(true)}
            title={"Open mobile menu"}
          >
            <FiMenu
              className={"h-8 w-8 stroke-2 text-gray-500 hover:text-violet-500"}
            />
          </ButtonBase>
        </div>
      </Container>
    </header>
  );
}
