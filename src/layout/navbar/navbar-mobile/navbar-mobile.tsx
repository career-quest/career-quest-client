import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  className?: string;
};

const NavbarMobile = ({ className = "" }: Props) => {
  return (
    <div className={className}>
      <Sheet>
        <SheetTrigger className="p-2">
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <SheetHeader>
            <div className="flex justify-start">
              <Link to="/" className="font-semibold">
                Career Quest
              </Link>
            </div>
          </SheetHeader>
          <div className="flex flex-col gap-5">
            <ul className="gap-5 flex flex-col">
              <li>
                <Link to="/" className="py-2 pl-0 pr-2 block">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavbarMobile;
