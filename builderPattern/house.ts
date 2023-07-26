/**
 * 보기 싫은 뚱뚱한 생성자를 가진 클래스
 */
// class House {
//   constructor(
//     public rooms: number,
//     public toilets: number,
//     public windows: number,
//     public floors: number,
//     public hasBalcony: boolean,
//     public hasBasement: boolean,
//     public hasBackyard: boolean
//   ) {}
// }

// 보기 싫은 클래스의 인스턴스 -> 각각 무엇을 뜻하는 값인지 알기가 힘듦
// const house = new House(2, 1, 1, 1, true, true, true);

/**
 * builder 패턴으로 보기좋게 바꿔보자
 */
// 기본 클래스 생성
// class House {
//   public rooms: number;
//   public toilets: number;
//   public windows: number;
//   public floors: number;
//   public hasBalcony: boolean;
//   public hasBasement: boolean;
//   public hasBackyard: boolean;
// }

// class HouseBuilder {
//   private house: House;

//   constructor() {
//     this.house = new House();
//   }

//   public setRooms(rooms: number): HouseBuilder {
//     this.house.rooms = rooms;
//     return this;
//   }

//   public setToilets(toilets: number): HouseBuilder {
//     this.house.toilets = toilets;
//     return this;
//   }

//   public setWindows(windows: number): HouseBuilder {
//     this.house.windows = windows;
//     return this;
//   }

//   public setFloors(floors: number): HouseBuilder {
//     this.house.floors = floors;
//     return this;
//   }

//   public setBalcony(hasBalcony: boolean): HouseBuilder {
//     this.house.hasBalcony = hasBalcony;
//     return this;
//   }

//   public setBasement(hasBasement: boolean): HouseBuilder {
//     this.house.hasBasement = hasBasement;
//     return this;
//   }

//   public setBackyard(hasBackyard: boolean): HouseBuilder {
//     this.house.hasBackyard = hasBackyard;
//     return this;
//   }

//   public build(): House {
//     return this.house;
//   }
// }

// builder 패턴으로 만든 클래스의 인스턴스 -> 나중에 다른 기능을 추가하기도 편해졌다.
// const myHouse = new HouseBuilder()
//   .setRooms(3)
//   .setToilets(2)
//   .setWindows(7)
//   .setFloors(2)
//   .setBalcony(true)
//   .setBackyard(true)
//   .setBackyard(true)
//   .build();
