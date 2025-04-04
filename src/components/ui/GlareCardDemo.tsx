"use client";
import React from "react";
import { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./animated-modal";
import { GlareCard } from "../ui/glare-card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Sample data for the graph
const data = [
  { name: "Jan", yield: 50 },
  { name: "Feb", yield: 55 },
  { name: "Mar", yield: 65 },
  { name: "Apr", yield: 70 },
  { name: "May", yield: 72 },
];


  

export function GlareCardDemo() {
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");

  return (
    <div className="w-full bg-black">
      
    <div className="ml-5 grid grid-cols-1 md:grid-cols-4 px-20 py-2 gap-10">
      <Modal>
        <ModalTrigger>
          <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
            <p className="font-bold text-white text-lg">Max Yield : 72%</p>
            <p className="font-normal text-base text-neutral-200 mt-4">
              Farmer ID : 294hwoc78n <br />
            </p>
            <p className="font-normal text-base text-neutral-200">
              PiCore ID : PiC25
            </p>
          </GlareCard>
        </ModalTrigger>
        <ModalBody>
        <ModalContent>
  <h4 className="text-xl md:text-2xl text-neutral-800 dark:text-neutral-100 font-bold text-center mb-4">
    Does this look like an{" "}
    <span className="px-2 py-1 rounded-lg bg-gray-200 dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 ml-1">
      Opportunity
    </span>
    {" "}?
  </h4>

  <hr className="border-gray-300 dark:border-neutral-700 py-2 mb-4" />

  <div className="space-y-4 text-lg text-neutral-100 font-medium">
    <div className="p-4 bg-black border border-gray-600 rounded-lg flex justify-between items-center">
      <span className="text-gray-400">Farm Health</span>
      <span className="font-semibold text-white">72</span>
    </div>
    <div className="p-4 bg-black border border-gray-600 rounded-lg flex justify-between items-center">
      <span className="text-gray-400">Yield Score</span>
      <span className="font-semibold text-white">65</span>
    </div>
    <div className="p-4 bg-black border border-gray-600 rounded-lg flex justify-between items-center">
      <span className="text-gray-400">Farm APY</span>
      <span className="font-semibold text-white">59%</span>
    </div>
    <div className="p-4 bg-black border border-gray-600 rounded-lg flex justify-between items-center">
      <span className="text-gray-400">Farmer Address</span>
      <span className="font-mono text-blue-400">2649jhsb36f</span>
    </div>
  </div>
</ModalContent>


<ModalFooter className="flex justify-center gap-75 mt-6">
  <Modal>
    <ModalTrigger>
      <button className="px-4 py-2 bg-gray-200 text-black dark:bg-black dark:text-white border border-gray-300 rounded-md text-sm">
        More Details
      </button>
    </ModalTrigger>
    <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Take a look at the{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Progress
              </span>{" "}
              over months!
            </h4>

            <h2 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Max Yield : 72%
            </h2>

            {/* Line Graph */}
            <div className="w-full pr-10 h-60">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="yield" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

          </ModalContent>
          
        </ModalBody>
      
      </Modal>

      <Modal>
        <ModalTrigger>
            <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-2 rounded-md border border-black w-28">
              Stake 
            </button>
            </ModalTrigger>
            
        <ModalBody>
        <ModalContent>
  <h4 className="text-xl md:text-2xl text-neutral-800 dark:text-neutral-100 font-bold text-center mb-6">
    Are you ready to{" "}
    <span className="px-2 py-1 rounded-lg bg-gray-200 dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 mx-1">
      Stake
    </span>
    {" "}on this field?
  </h4>

  <hr className="border-gray-300 dark:border-neutral-700 mb-4" />

  {/* BTC Staking Amount */}
  <div className="p-4 mt-5 bg-black border border-gray-600 rounded-lg">
    <div className="flex justify-between items-center mb-2 text-gray-400">
      <span>BTC Staking Amount</span>
      
    </div>
    <div className="flex items-center bg-gray-900 border border-gray-700 rounded-lg p-2">
      <input
        id="title"
        type="text"
        placeholder="0.00"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none p-2"
      />
      
    </div>
  </div>

  {/* Duration Selection */}
  <div className="p-4 bg-black border border-gray-600 rounded-lg mt-4">
    <div className="mb-2 text-gray-400">Duration of the Stake</div>
    <select
      id="duration"
      value={duration}
      onChange={(e) => setDuration(e.target.value)}
      className="w-full p-4 bg-gray-900 text-white border border-gray-700 rounded-lg focus:ring focus:ring-indigo-400"
    >
      <option value="" disabled>Select duration</option>
      <option value="3 months">3 Months</option>
      <option value="6 months">6 Months</option>
      <option value="1 year">1 Year</option>
    </select>
  </div>

  {/* Confirm Button */}
  <div className="pt-6 flex justify-center">
  <button className="w-36 py-3 text-lg font-semibold tracking-wide rounded-full border border-gray-500 bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
    Confirm
  </button>
</div>


</ModalContent>

          
        </ModalBody>
      
      </Modal>





          </ModalFooter>
        </ModalBody>
      
      </Modal>
      <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
        <p className="font-bold text-white text-lg">Max Yield : 24%</p>
        <p className="font-normal text-base text-neutral-200 mt-4">
          Farmer ID : 945xrkc73a <br/>
          PiCore ID : PiC67
        </p>
      </GlareCard>
      <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
        <p className="font-bold text-white text-lg">Max Yield : 66%</p>
        <p className="font-normal text-base text-neutral-200 mt-4">
          Farmer ID : 407mkwl14q <br/>
          PiCore ID : PiC94
        </p>
      </GlareCard>
      <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
        <p className="font-bold text-white text-lg">Max Yield : 50%</p>
        <p className="font-normal text-base text-neutral-200 mt-4">
          Farmer ID : 138eoins30u <br/>
          PiCore ID : PiC22
        </p>
      </GlareCard>
      <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
        <p className="font-bold text-white text-lg">Max Yield : 38%</p>
        <p className="font-normal text-base text-neutral-200 mt-4">
          Farmer ID : 6923akex56h<br/>
          PiCore ID : PiC71
        </p>
      </GlareCard>
      <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
        <p className="font-bold text-white text-lg">Max Yield : 71%</p>
        <p className="font-normal text-base text-neutral-200 mt-4">
          Farmer ID : 2956iejd94g<br/>
          PiCore ID : PiC103
        </p>
      </GlareCard>
      <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
        <p className="font-bold text-white text-lg">Max Yield : 65%</p>
        <p className="font-normal text-base text-neutral-200 mt-4">
          Farmer ID : 9537nfvx85s<br/>
          PiCore ID : PiC113
        </p>
      </GlareCard>
      <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
        <p className="font-bold text-white text-lg">Max Yield : 48%</p>
        <p className="font-normal text-base text-neutral-200 mt-4">
          Farmer ID : 9473nflk47z<br/>
          PiCore ID : PiC89
        </p>
      </GlareCard>
    </div>
    </div>
  );
}
