"use client";
import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaUserFriends } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { switzerHotelSuggestions } from "./utils/constant";

export default function SearchField() {
  
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [isRoomMenuOpen, setIsRoomMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const today = new Date();

  const getMinCheckoutDate = () => {
    if (checkInDate) {
      const nextDay = new Date(checkInDate);
      nextDay.setDate(nextDay.getDate() + 1);
      return nextDay;
    }
    return today;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      const filtered = switzerHotelSuggestions.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setFilteredSuggestions([]);
  };

  const handleHotelSearch = (e: any) => {
    e.preventDefault();
    window.location.replace(
      `/hotels?searchTerm=${query}&check-in=${checkInDate}&check-out=${checkOutDate}&rooms=${rooms}&adults=${adults}&children=${children}`
    );
  };

  return (
    <div className="p-4 rounded-lg shadow-md border-2 mx-auto">
      <form onSubmit={handleHotelSearch}>
        <div className="flex flex-col gap-2 lg:flex-row relative items-cente justify-between space-x-2">
          {/* Hotel Input */}
          <div className="relative flex rounded-lg items-center flex-1 border px-4 py-2">
            <Input
              type="text"
              label="Search for Town / Village or Hotel in Switzerland"
              value={query}
              onChange={handleInputChange}
              fullWidth
              className="rounded-lg"
            />
            {filteredSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white dark:bg-slate-400 dark:text-gray-800 border mt-1 z-10 max-h-48 overflow-y-auto shadow-lg">
                {filteredSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Check-in Date */}
          <div className="flex h-[73px] w-[200px] items-center border rounded-lg px-4 py-2">
            <FaCalendarAlt />
            <DatePicker
              selected={checkInDate}
              onChange={(date) => {
                setCheckInDate(date);
                setCheckOutDate(null);
                setIsCheckInOpen(false);
              }}
              onClickOutside={() => setIsCheckInOpen(false)}
              open={isCheckInOpen}
              onInputClick={() => setIsCheckInOpen(true)}
              placeholderText="Check-in"
              className="w-full px-2 py-1 focus:outline-none"
              dateFormat="EEE, dd-MM-yy"
              minDate={today}
              required
            />
          </div>

          {/* Check-out Date */}
          <div className="flex h-[73px] w-[200px] items-center border rounded-lg px-4 py-2">
            <FaCalendarAlt />
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => {
                setCheckOutDate(date);
                setIsCheckOutOpen(false);
              }}
              onClickOutside={() => setIsCheckOutOpen(false)}
              open={isCheckOutOpen}
              onInputClick={() => setIsCheckOutOpen(true)}
              placeholderText="Check-out"
              className="w-full px-2 py-1 focus:outline-none"
              dateFormat="EEE, dd-MM-yy"
              minDate={getMinCheckoutDate()}
              disabled={!checkInDate}
              required
            />
          </div>

          {/* Room, Adult, and Children Selector */}
          <div
            className="relative flex items-center border rounded-lg px-4 py-2 cursor-pointer"
            onClick={() => setIsRoomMenuOpen(!isRoomMenuOpen)}
          >
            <FaUserFriends />
            <p className="ml-2">
              {rooms} Rooms, {adults} Adults, {children} Children
            </p>
          </div>

          {isRoomMenuOpen && (
            <div className="absolute z-10 bg-white dark:bg-slate-500 md:dark:bg-black  border right-20 top-[30px] lg:top-[60px] mt-2 p-4 rounded-lg shadow-lg max-w-xs">
              {/* Rooms */}
              <div className="flex items-center justify-between py-2">
                <p>Rooms</p>
                <div className="flex items-center space-x-2">
                  <Button onClick={() => setRooms(Math.max(1, rooms - 1))}>
                    -
                  </Button>
                  <span>{rooms}</span>
                  <Button onClick={() => setRooms(rooms + 1)}>+</Button>
                </div>
              </div>
              {/* Adults */}
              <div className="flex items-center justify-between py-2">
                <p>Adults</p>
                <div className="flex items-center space-x-2">
                  <Button onClick={() => setAdults(Math.max(1, adults - 1))}>
                    -
                  </Button>
                  <span>{adults}</span>
                  <Button onClick={() => setAdults(adults + 1)}>+</Button>
                </div>
              </div>
              {/* Children */}
              <div className="flex items-center justify-between py-2">
                <p>Children</p>
                <div className="flex items-center space-x-2">
                  <Button
                    onClick={() => setChildren(Math.max(0, children - 1))}
                  >
                    -
                  </Button>
                  <span>{children}</span>
                  <Button onClick={() => setChildren(children + 1)}>+</Button>
                </div>
              </div>
            </div>
          )}

          {/* Search Button */}
          <div className=" flex justify-center items-center">
            <Button color="primary" className="" size="lg" type="submit">
              Search
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
