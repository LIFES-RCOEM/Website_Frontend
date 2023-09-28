import partner from '../../assets/home/partner.jpg'


const Partner = () => {


    const registerOwner = (e) => {
        // fleet owner registration
        e.preventDefault();
        alert('Fleet owner registered')
    }



    return (
        <div id="partner" className="flex flex-col p-10 bg-light-grad w-full h-full gap-5">
            <div className="text-center">
                <p className="text-4xl xl:text-6xl font-bold">Join Us</p>
                <span>

                </span>
            </div>
            <div className="h-full flex flex-col xl:flex-row">
                <div className="hidden xl:grid w-full xl:w-1/2 place-content-center">
                    {/* image */}
                    <img src={partner} style={{ width: "100%", height: "75%" }} alt="partner with us" />
                </div>
                <form
                    onSubmit={registerOwner}
                    className="right w-full xl:w-1/2 flex flex-col gap-10 items-center px-4 py-2 shadow-lg">
                    <div className="w-full flex flex-col items-center">
                        <label htmlFor="comapny" className="mb-2 text-lg font-semibold">Company Name</label>
                        <input type="text" name="comapny" className="block w-3/4 h-[45px] px-2" id="comapny" placeholder="Company name..." />
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <label htmlFor="name" className="mb-2 text-lg font-semibold">Owner Name</label>
                        <input type="text" name="name" className="block w-3/4 h-[45px] px-2" id="name" placeholder="Owner name..." />
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <label htmlFor="email" className="mb-2 text-lg font-semibold">Company Email</label>
                        <input type="email" name="email" className="block w-3/4 h-[45px] px-2" id="email" placeholder="Company mail" />
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <label htmlFor="email" className="mb-2 text-lg font-semibold">Phone No</label>
                        {/* <span className="h-full border-2 border-black px-2 text-2xl text-gray-500 font-semibold">
                            +91
                        </span> */}
                        <input type="tel" name="phone" className="w-3/4 h-[45px] px-2" id="phone" placeholder="88xxxxxx99" />
                    </div>
                    <button type="submit" className="w-1/2 bg-orange-grad py-3 rounded-full">
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Partner