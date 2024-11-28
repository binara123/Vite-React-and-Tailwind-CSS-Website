import { testimonials } from "../constants"

const Testimonials = () => {
    return (
        <div className="mt-20 tracking-wide">
            <h2 className="text-3xl sm:text-5xl lg:-6xl text-center my-10 lg:my-20">What people 
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {""} are saying</span>
            </h2>
            <div className="flex flex-wrap justify-center">{testimonials.map((testimonials, index) => (
                <div key={index} className="w-full lg:w-1/3 sm:w-1/2 px-4 py-2">
                    <div className="bg-neutral rounded-md p-6 text-md boder border-meutral-800 ">
                        <p><span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                        {""} are saying{testimonials.text}</span></p>

                        <div className="flex mt-8 items-start">
                            <img className="w-12 h-12 mr-6 rounded-full border 
                            border-neutral-300" src={testimonials.image} alt={testimonials.user} />
                        </div>

                        <div>
                            <h6>{testimonials.user}</h6>
                                <span className="text-sm font-normal italic text-neutral-600">
                                    {testimonials.company}</span>
                            
                        </div>
                    </div>
                </div>
            ))}

            </div>
        </div>
    )
}

export default Testimonials;