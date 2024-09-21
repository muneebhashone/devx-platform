import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
const AdditionalAccounts = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="bg-[#2a3142] border-gray-700">
        <CardHeader>
          <CardTitle className="text-xl text-gray-200">
            Additional accounts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-400">
            Creating a new account allows you to use this platform in different
            ways, while still having just one login.
          </p>
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-2">
              Client Account
            </h3>
            <p className="text-gray-400 mb-2">
              Hire, manage and pay as a different company. Each client company
              has its own freelancers, payment methods and reports.
            </p>
            <motion.div>
              <Button
                variant="outline"
                className="border-[#4f7df3] text-[#4f7df3] hover:bg-[#4f7df3] hover:text-white"
              >
                New Client Account
              </Button>
            </motion.div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-2">
              Agency Account
            </h3>
            <p className="text-gray-400 mb-2">
              Find jobs and earn money as manager of a team of freelancers.
            </p>
            <motion.div>
              <Button
                variant="outline"
                className="border-[#4f7df3] text-[#4f7df3] hover:bg-[#4f7df3] hover:text-white"
              >
                New Agency Account
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AdditionalAccounts;
