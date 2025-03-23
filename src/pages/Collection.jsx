import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { IoIosArrowDropdown } from "react-icons/io";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import Pagination from "../components/Pagination";
import ProductList from "../components/ProductList";

const ITEMS_PER_PAGE = 8;

function Collection() {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [topPick, setTopPick] = useState([]);
  const [sortType, setSortType] = useState("relavent");
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE ;
  const endIndex = startIndex + ITEMS_PER_PAGE ;
  const visibleData = filterProducts.slice(startIndex,endIndex);
  const totalPage = Math.ceil(filterProducts.length /ITEMS_PER_PAGE) ;

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const toggleTopPick = (e) => {
    if (topPick.includes(e.target.value)) {
      setTopPick((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setTopPick((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let filteredProducts = products.slice();
    if (showSearch && search) {
      filteredProducts = filteredProducts.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        category.includes(product.category)
      );
    }
    if (topPick.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        topPick.includes(product.topPick)
      );
    }

    setFilterProducts(filteredProducts);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  const handlePage = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    setCurrentPage(1);
  }, [sortType,search,showSearch,category ,topPick]);

  useEffect(() => {
    applyFilter();
  }, [category, topPick, search, showSearch, products ,currentPage]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Left side : filter  */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2 "
        >
          FILTERS
          <IoIosArrowDropdown
            className={`text-3xl  sm:hidden ${showFilter ? "" : "-rotate-90"}`}
          />
        </p>
        {/* category filter  */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? " " : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700"
           onChange={toggleCategory}
          >
            <p className="flex gap-2">
              <input
                className="w-3 cursor-pointer"
                type="checkbox"
                name="ghee"
                id="gheeCategory"
                value={"Ghee"}
                // onChange={toggleCategory}
              />{" "}
             <label className="cursor-pointer" htmlFor="gheeCategory"><span>Ghee</span></label>
             </p>
            <p className="flex gap-2">
              <input
                className="w-3 cursor-pointer"
                type="checkbox"
                name="oil"
                id="oilCategory"
                value={"Oil"}
                // onChange={toggleCategory}
              />{" "}
             <label className="cursor-pointer" htmlFor="oilCategory"><span>Oil</span></label>
             </p>
            <p className="flex gap-2 cursor-pointer">
              <input
                className="w-3 cursor-pointer"
                type="checkbox"
                name="spices"
                id="spicesCategory"
                value={"Spices"}
                // onChange={toggleCategory}
              />{" "}
             <label className="cursor-pointer" htmlFor="spicesCategory"><span>Spices</span></label>
            </p>
          </div>
        </div>

        {/* Top Picks For You */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? " " : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TOP PICKS FOR YOU</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700" 
           onChange={toggleTopPick}
          >
            <p className="flex gap-2">
              <input
                className="w-3 cursor-pointer"
                type="checkbox"
                name="ghee"
                id="gheeTopPick"
                value={"ghee"}
                // onChange={toggleTopPick}
              />{" "}
             <label className="cursor-pointer" htmlFor="gheeTopPick"> <span>Ghee</span> </label>
            </p>
            <p className="flex gap-2">
              <input
                className="w-3 cursor-pointer"
                type="checkbox"
                name="peanutOil"
                id="peanutTopPick"
                value={"peanutoil"}
                // onChange={toggleTopPick}
              />{" "}
              <label className="cursor-pointer" htmlFor="peanutTopPick"> <span>Peanut Oil</span> </label>
            </p>
            <p id="honey" className="flex gap-2 cursor-pointer" >
              <input
                className="w-3 cursor-pointer"
                type="checkbox"
                name="honey"
                id="honeyTopPick"
                value={"honey"}
                // onChange={toggleTopPick}
              />{" "}
            <label className="cursor-pointer" htmlFor="honeyTopPick"> <span>Honey</span> </label>
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* product sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relavent">Sort by:Relavent</option>
            <option value="low-high">Sort by:Low to High</option>
            <option value="high-low">Sort by:High to Low</option>
          </select>
        </div>
        {/* map products */}

        <div className="flex flex-col">
        <div className="min-h-[500px]">
        <ProductList 
            products={visibleData}
        />
        </div>
        {
          products.length > ITEMS_PER_PAGE &&
          (<Pagination
          totalPage={totalPage}
          currentPage={currentPage}
          handlePage={handlePage}
        />)
        }
       
        {" "}
        </div>
      </div>
    </div>
  );
}

export default Collection;
