import React from "react";
import { arr1, arr2 } from "./utils";
import Chart from "../../../assets/images/tokenomics.svg";

type Props = {};

export default function ProgressBar(props: Props) {
  return (
    <div className="grid gap-4 grid-cols-3">
      <img
        src={Chart}
        data-aos-mirror="true"
        alt="chart"
        className="my-auto chart w-full"
        title="chart"
      />
      <div>
        <ul className="list-none">
          {arr1.map((val: any, key: number) => (
            <li className="flex items-center" key={key}>
              <p
                className="text-[24.77px]"
                style={{
                  color: val.color,
                  marginTop: "-1.5rem",
                  marginRight: "1rem",
                }}
              >
                ●
              </p>
              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <p className="text-white text-md py-1">{val.name}</p>
                  <p className="text-white text-md py-1">{val.percent}%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                  <div
                    className={`h-1.5 w-[${val.percent}%] rounded-full`}
                    style={{
                      backgroundColor: val.color,
                      width: `${val.percent}%`,
                    }}
                  ></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="list-none">
          {arr2.map((val: any, key: number) => (
            <li className="flex items-center" key={key}>
              <p
                className="text-[24.77px]"
                style={{
                  color: val.color,
                  marginTop: "-1.5rem",
                  marginRight: "1rem",
                }}
              >
                ●
              </p>
              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <p className="text-white text-md py-1">{val.name}</p>
                  <p className="text-white text-md py-1">{val.percent}%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                  <div
                    className={`h-1.5 w-[${val.percent}%] rounded-full`}
                    style={{
                      backgroundColor: val.color,
                      width: `${val.percent}%`,
                    }}
                  ></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
