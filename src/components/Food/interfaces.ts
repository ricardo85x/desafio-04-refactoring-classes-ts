export interface FoodProps {
    available: boolean,
    id: number,
    image: string,
    name: string,
    description: string,
    price: number
}

export interface FoodHandleProps {
    food: {
      available: boolean,
      id: number,
      image: string,
      name: string,
      description: string,
      price: number
    },
    handleEditFood : (food : FoodProps) => void,
    handleDelete : (id : number) => void,
  }