

const ShimmerUI = () => {
    const arr = [1,2,3,4,5,6,7,8,9,10];
    return (
        <div className="restaurant-list">
            {arr.map((elem,id) => <div className="shimmer-card" key={id}></div>)}
        </div>
    );
}
export default ShimmerUI;