import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { Button } from "./ui/button";
import { FaCheck } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-blue-200 to-white">
      <header className="flex justify-end w-full p-4">
        <Select>
          <SelectTrigger id="language" aria-label="Language">
            <SelectValue placeholder="EN" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">EN</SelectItem>
            <SelectItem value="es">ES</SelectItem>
            <SelectItem value="fr">FR</SelectItem>
          </SelectContent>
        </Select>
      </header>
      <main className="flex flex-col items-center w-full p-4">
        <div className="flex flex-col items-center mb-4">
          <MdOutlinePhoneInTalk className=" w-16 h-16" />
          <p className="mt-2 text-sm text-muted-foreground">STEP 1/2</p>
          <div className="w-full h-1 mt-2 bg-gray-200">
            <div className="h-full bg-blue-500 w-1/2" />
          </div>
        </div>
        <Card className="w-full max-w-md p-4">
          <CardContent className="flex flex-col items-center">
            <FaCheck className="w-32 h-32 mb-4" />
            <p className="mb-4 text-lg font-semibold">
              Enter your phone number
            </p>
            <div className="w-full mb-4">
              <Label
                htmlFor="mobile-number"
                className="block mb-2 text-sm font-medium"
              >
                Mobile number
              </Label>
              <div className="flex items-center border rounded-md">
                <MdOutlinePhoneInTalk className=" mr-1 w-6 h-6" />
                <Input
                  id="mobile-number"
                  type="text"
                  placeholder="+964 -----------"
                  className="w-full p-2 border-none focus:ring-0"
                />
              </div>
            </div>
            <Button className="w-full py-2 mt-4 bg-gray-300" disabled>
              CONTINUE
            </Button>
          </CardContent>
        </Card>
        <p className="mt-4 text-xs text-center text-muted-foreground">
          Entertainment is a subscription service that will automatically renew
          for 1 USD/7 Day(s). You can unsubscribe from the service at anytime,
          by sending STOP to **** for (operator). To make use of this service,
          you must be 18 or more unless you have received permission from your
          parents or the person who is authorized to pay your bill.
          <br />
          <a href="#" className="text-blue-500">
            Terms & Conditions
          </a>{" "}
          -{" "}
          <a href="#" className="text-blue-500">
            Privacy Policy
          </a>
        </p>
      </main>
    </div>
  );
};

export default LandingPage;
