
import { Card } from "@/components/ui/card";
import { ArrowUp, CreditCard, DollarSign } from "lucide-react";

const WalletOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Wallet Balance Card */}
      <Card className="p-6 bg-[#0A1E3B] border-0 text-white">
        <div className="flex flex-col h-full">
          <div className="flex items-center mb-4">
            <div className="bg-blue-600/20 p-2 rounded mr-2">
              <CreditCard className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Wallet Balance</p>
              <p className="text-gray-400 text-xs">$0.00</p>
            </div>
          </div>
          
          <div className="mt-2 mb-2">
            <h3 className="text-2xl md:text-3xl font-mono">0.00000000 BTC</h3>
          </div>
        </div>
      </Card>
      
      {/* Total Earnings Card */}
      <Card className="p-6 bg-[#0A2E2B] border-0 text-white">
        <div className="flex flex-col h-full">
          <div className="flex items-center mb-4">
            <div className="bg-green-600/20 p-2 rounded mr-2">
              <DollarSign className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Total Earnings</p>
            </div>
          </div>
          
          <div className="mt-2 mb-2">
            <h3 className="text-2xl md:text-3xl font-mono">$0.00</h3>
          </div>
          
          <div className="mt-2">
            <div className="flex items-center">
              <ArrowUp className="h-3 w-3 text-green-400 mr-1" />
              <span className="text-xs text-green-400">+12.5% this month</span>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Live Prices Card */}
      <Card className="p-6 bg-[#0A1E3B] border-0 text-white">
        <div className="flex flex-col h-full">
          <div className="flex items-center mb-4">
            <div className="bg-blue-600/20 p-2 rounded mr-2">
              <CreditCard className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Live Prices</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src="/lovable-uploads/7066c7d4-f90b-46b4-b31e-d7a96e2a4e55.png" alt="Bitcoin" className="h-5 w-5 mr-2" />
                <div>
                  <p className="font-medium">Bitcoin</p>
                  <p className="text-xs text-gray-400">BTC</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">$81,811.00</p>
                <p className="text-xs text-red-400">-6.15%</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-5 w-5 mr-2">
                  <img src="/lovable-uploads/935cdec7-3d7f-4bb5-a2be-48c921527778.png" alt="Cardano" className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Cardano</p>
                  <p className="text-xs text-gray-400">ADA</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">$1,773.93</p>
                <p className="text-xs text-green-400">+6.95%</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default WalletOverview;
