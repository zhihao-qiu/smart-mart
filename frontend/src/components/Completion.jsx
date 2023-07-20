const Completion = (props) => {

//static return page for purpose of the demo, no local storage on orders

  return (
    // <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
    //   <div className="flex justify-start item-start space-y-2 flex-col ">
    //     <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">Payment Successful!</h1>
    //     <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Order confirmation will be sent to your email.</p>
    //   </div>
    // </div>
        <div className="2xl:container 2xl:mx-auto py-14 px-4 md:px-6 xl:px-20">
            <div className="flex flex-col xl:flex-row justify-center items-center space-y-10 xl:space-y-0 xl:space-x-8">
                <div className="w-full lg:w-9/12 xl:w-full">
                    <img className="w-full hidden xl:block" src="https://i.ibb.co/RcMmXKc/Rectangle-19.png" alt="wardrobe " />
                    <img className="w-full hidden md:block xl:hidden" src="https://i.ibb.co/ZhjHb0R/Rectangle-19-2.png" alt="wardrobe " />
                    <img className="w-full md:hidden" src="https://i.ibb.co/sbV9CD2/Rectangle-19.png" alt="wardrobe " />
                </div>
                <div className="flex justify-center flex-col items-start w-full lg:w-9/12 xl:w-full ">
                    <h3 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 w-full  md:text-left text-gray-800">Payment Confirmation #13432</h3>
                    <p className="text-base leading-none mt-4 text-gray-800">
                        Paid using credit card ending with <span className="font-semibold">4242</span>
                    </p>
                    <div className="flex justify-center items-center w-full mt-8  flex-col space-y-4 ">
                        <div className="flex md:flex-row justify-start items-start md:items-center  border border-gray-200 w-full">
                            <div className="w-40 md:w-32">
                                <img className="hidden md:block object-scale-down" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="t-shirt" />
                                <img className="md:hidden object-scale-down" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="t-shirt" />
                            </div>
                            <div className="flex justify-start md:justify-between items-start md:items-center  flex-col md:flex-row w-full p-4 md:px-8">
                                <div className="flex flex-col md:flex-shrink-0  justify-start items-start">
                                    <h3 className="text-lg md:text-xl  w-full font-semibold leading-6 md:leading-5  text-gray-800">{props.tshirt.title}</h3>
                                    <div className="flex flex-row justify-start  space-x-4 md:space-x-6 items-start mt-4 ">
                                        <p className="text-sm leading-none text-gray-600">
                                            Qty: <span className="text-gray-800"> {props.tshirt.quantity}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex mt-4 md:mt-0 md:justify-end items-center w-full ">
                                    <p className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">${(props.tshirt.price * props.tshirt.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex md:flex-row justify-start items-start md:items-center  border border-gray-200 w-full">
                            <div className="w-40 md:w-32">
                                <img className="hidden md:block object-scale-down" src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="jacket" />
                                <img className="md:hidden object-scale-down" src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="jacket" />
                            </div>
                            <div className="flex justify-start md:justify-between items-start md:items-center  flex-col md:flex-row w-full p-4 md:px-8">
                                <div className="flex flex-col md:flex-shrink-0  justify-start items-start">
                                    <h3 className="text-lg md:text-xl font-semibold leading-6 md:leading-5  text-gray-800">{props.jacket.title}</h3>
                                    <div className="flex flex-row justify-start  space-x-4 md:space-x-6 items-start mt-4 ">
                                        <p className="text-sm leading-none text-gray-600">
                                            Qty: <span className="text-gray-800"> {props.jacket.quantity}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex mt-4 md:mt-0 md:justify-end items-center w-full ">
                                    <p className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">${props.jacket.price * props.jacket.quantity}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start mt-8 xl:mt-10 space-y-10 w-full">
                        <div className="flex justify-start items-start flex-col md:flex-row  w-full md:w-auto space-y-8 md:space-y-0 md:space-x-14 xl:space-x-8  lg:w-full">
                            <div className="flex jusitfy-start items-start flex-col space-y-2">
                                <p className="text-base font-semibold leading-4  text-gray-800">Billing Address</p>
                                <p className="text-sm leading-5 text-gray-600">1234 West 57th Avenue, Vancouver BC V6T 2L6</p>
                            </div>
                            <div className="flex jusitfy-start items-start flex-col space-y-2">
                                <p className="text-base font-semibold leading-4  text-gray-800">Shipping Address</p>
                                <p className="text-sm leading-5 text-gray-600">1234 West 57th Avenue, Vancouver BC V6T 2L6</p>
                            </div>
                            <div className="flex jusitfy-start items-start flex-col space-y-2">
                                <p className="text-base font-semibold leading-4  text-gray-800">Shipping Date</p>
                                <p className="text-sm leading-5 text-gray-600">July 31, 2023</p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4 w-full">
                            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div className="flex justify-between  w-full">
                                    <p className="text-base leading-4 text-gray-800">Subtotal</p>
                                    <p className="text-base leading-4 text-gray-600">$100.59</p>
                                </div>
                                <div className="flex justify-between  w-full">
                                    <p className="text-base leading-4 text-gray-800">Taxes</p>
                                    <p className="text-base leading-4 text-gray-600">$12.07</p>
                                </div>
                                <div className="flex justify-between  w-full">
                                    <p className="text-base leading-4 text-gray-800">Shipping</p>
                                    <p className="text-base leading-4 text-gray-600">FREE</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                                <p className="text-base font-semibold leading-4 text-gray-600">$112.66</p>
                            </div>
                            <div className="flex w-full justify-center items-center pt-1 md:pt-4  xl:pt-8 space-y-6 md:space-y-8 flex-col">
                                <button className="py-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  w-full text-base font-medium leading-4 text-white bg-gray-800 hover:bg-black">Track Your Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Completion.defaultProps = {
  tshirt: {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.30,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    },
    "quantity": 2
  },
  jacket: {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.7,
      "count": 500
    },
    "quantity": 1
  },
}

export default Completion;

