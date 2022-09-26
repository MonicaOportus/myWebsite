function Skills(props) {
    return(
        <div className="bg-[#212121] inline-block align-middle rounded-xl w-[350px] h-[370px] text-center px-[30px] m-[30px]">
            <div className={`rounded-full relative w-[100px] h-[100px] top-[-50px] left-[95px] ${props.background}`}>
                <i className={`${props.icon}`}></i>
            </div>
            <h3 className="title font-medium text-[30px]">{props.title}</h3>
            <p className="text-[20px] pt-[20px]">{props.description}</p>
        </div>
    )
}

export default Skills;