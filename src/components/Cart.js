import QUANTITY from "./Quantity";
import data from "../Data/products.json";
export default function Cart() {
  return (
    <div className="flex justify-center">
      <div className="cart-module flex m-auto gap-5 absolute inset-16 w-[60%] rounded-2xl shadow-2xl p-6">
        {data.equipment.map((product, index) => (
          <div>
            <div className="flex-1 h-full">
              <img
                className="h-full object-cover"
                src={product.image}
                alt=""
              />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-semibold my-4">
                {product.name}
              </h1>
              <p className="text-xl">
                {product.description}
              </p>
              <h1 className="text-2xl font-semibold my-4">
                {product.color}
              </h1>
              <div className="flex gap-3 my-4">
                <button className="bg-zinc-900 w-5 h-5 rounded-full" />
                <button className="bg-red-800 w-5 h-5 rounded-full" />
                <button className="bg-slate-500 w-5 h-5 rounded-full" />
              </div>
              <h1 className="text-2xl font-semibold">
                Quantity
              </h1>
              <QUANTITY />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
