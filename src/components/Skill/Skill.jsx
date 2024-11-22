const Skill =({data}) => {
    return(
        <div className="flex gap-4 text-sm">
          {
            data.map((e,i) => (
              <div key={`${e}-skill-${i}`} className="bg-primaryTitle px-3 py-1 rounded mb-2 text-primaryBg font-semibold hover:text-primaryContent">{e}</div>
            ))
          }
            </div>
    )
}

export default Skill