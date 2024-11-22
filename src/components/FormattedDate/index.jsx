const FormattedDate =({children,isHighLight}) =>{
    return(
        <div
        className={`transition-all ${isHighLight ? "text-primarySubcontent" : "" }`}> 
        {children}
      </div>
    )
}

export default FormattedDate