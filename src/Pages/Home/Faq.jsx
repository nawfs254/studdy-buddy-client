const Faq = () => {
    return (
        <div className="mx-2">
            <div className="text-content text-center space-y-4 my-3">
                <h1 className="text-3xl md:text-5xl font-bold">Frequently Asked Questions</h1>
                <p className="w-full md:w-1/2 mx-auto">Unlock the power of collaborative learning with our feature-rich platform. Create assignments together, join interactive study sessions, receive peer feedback, track your progress, share resources, and earn rewards - all in one seamless experience.

                </p>
            </div>

            <div className="faq my-4">
                <div className="collapse collapse-plus border-2 border-[#cac9c9] rounded-lg w-full lg:w-3/5 mx-auto my-2 hover:bg-base-200 transition-all">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        How does StudyBuddy facilitate group studying?
                    </div>
                    <div className="collapse-content">
                        <p>StudyBuddy is designed to enhance collaborative learning by enabling users to create and share assignments, join virtual study sessions, provide peer feedback, and engage in discussions within a supportive online community.</p>
                    </div>
                </div>

                <div className="collapse collapse-plus border-2 border-[#cac9c9] rounded-lg w-full lg:w-3/5 mx-auto my-2 hover:bg-base-200 transition-all">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Can I join multiple study groups on StudyBuddy?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, you can be part of multiple study groups on StudyBuddy. Our platform allows you to collaborate with different sets of friends or classmates, making it easier to manage your study commitments.</p>
                    </div>
                </div>

                <div className="collapse collapse-plus border-2 border-[#cac9c9] rounded-lg w-full lg:w-3/5 mx-auto my-2 hover:bg-base-200 transition-all">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    How secure is my personal information on StudyBuddy?
                    </div>
                    <div className="collapse-content">
                        <p>We take data privacy and security very seriously at StudyBuddy. Your personal information is protected through industry-standard encryption protocols, and we never share your data with third parties without your consent.</p>
                    </div>
                </div>

                <div className="collapse collapse-plus border-2 border-[#cac9c9] rounded-lg w-full lg:w-3/5 mx-auto my-2 hover:bg-base-200 transition-all">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    Can I access StudyBuddy on my mobile device?
                    </div>
                    <div className="collapse-content">
                        <p>Absolutely! StudyBuddy is designed to be fully responsive and accessible on various devices, including smartphones and tablets. You can seamlessly participate in study sessions, collaborate on assignments, and access your personalized dashboard on the go.</p>
                    </div>
                </div>

                <div className="collapse collapse-plus border-2 border-[#cac9c9] rounded-lg w-full lg:w-3/5 mx-auto my-2 hover:bg-base-200 transition-all">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    Is there a fee to use StudyBuddy?
                    </div>
                    <div className="collapse-content">
                        <p>StudyBuddy offers a freemium model. While basic features are available for free, we provide an optional premium subscription that unlocks additional features, such as advanced analytics, unlimited resource sharing, and priority support.</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Faq;