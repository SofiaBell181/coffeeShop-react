import Filter from "./Filter"

export default function AllCategories() {

   
    return(
        <>
            <div className="block-btn">
                {["для эспрессо", "для фильтра", "для кофемашины", "для молочных напитков", "для турки", "все"]
                .map((category, index) => 
                    <Filter key={index} category={category} />
                )}

            </div>

        </>
    )
}
