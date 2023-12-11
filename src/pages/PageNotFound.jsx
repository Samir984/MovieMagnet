import pageNotFoundImg from "../assets/no-results.png";

function PageNotFound() {
  return (
    <div className="p-2 flex justify-center ">
      <div>
        <img
          src={pageNotFoundImg}
          alt="no reult found"
          className="max-w-[300px] h-96"
        />
        <p className=" p-4 text-center">Page Not Found</p>
      </div>
    </div>
  );
}

export default PageNotFound;
