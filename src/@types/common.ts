
export interface User {
    id: number
    email: string
  }

export interface CarDetailsProps {
  id: number
  name: string
  model: string
  doors: number
  color: string
  type: string
  carChange: string
  link: string
  price: string
	
}


export interface RentInfo {
  locatedAt: string;
  devolutionTime: string;
  rentedCar: CarDetailsProps;
}

export interface CarProps {
  id: number
  name: string
  model: string
  link: string
  price: string
}

