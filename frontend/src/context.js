import React , {useState, useContext} from "react";

const AppContext = React.createContext()

const AppProvider = ({children}) => {
 const [isSideBarOpen, setIsSidebarOpen] = useState(false)
 const [isShoppingCartOpen, setShoppingCartOpen] = useState(false)

 const openSideBar = () => {
  setIsSidebarOpen(true)
 }

 const closeSideBar = () => {
  setIsSidebarOpen(false)
 }

 const openCart = () => {
  setShoppingCartOpen(true)
 }

 const closeCart = () => {
  setShoppingCartOpen(false)
 }

 return (
  <AppContext.Provider value={{
   isSideBarOpen,
   isShoppingCartOpen,
   openSideBar,
   closeSideBar,
   openCart,
   closeCart
  }}>
   {children}
  </AppContext.Provider>
 )
}

const useGlobalContext = () => {
 return useContext(AppContext)
}

export {AppProvider , AppContext, useGlobalContext }