
'use client'
import Button from '@/core/atoms/Button';
import EmptyImage from '@/core/atoms/Empty Image';
import useFetch from '@/hooks/fetch';
import useSize from '@/hooks/resize';
import React, { useState, useCallback } from 'react'

/**
 * 1.Các modules cấp cao không nên phụ thuộc vào các modules cấp thấp. Cả hai nên phụ thuộc vào abstraction.
 * 2. Abstractions không nên phụ thuộc vào chi tiết: Đây có nghĩa là các thành phần cấp cao không nên phụ thuộc vào các chi tiết cụ thể 
 * của các thành phần cấp thấp. 
 * Thay vào đó, chúng nên phụ thuộc vào các giao diện hoặc lớp cơ sở, là các đối tượng trừu tượng và không cố định.
 */

//dependency inversion principle
interface IMoving {
    wayOfMoving(): string;
}

class TwoLegs implements IMoving { //thành phần cấp thấp
    public wayOfMoving(): string {
        return `Đi bằng 2 chân`
    }
}

class FourLegs implements IMoving { //thành phần cấp thấp
    public wayOfMoving(): string {
        return `Đi bằng 4 chân`
    }
}

class Fly implements IMoving { //thành phần cấp thấp
    public wayOfMoving(): string {
        return `Bayyyyy`
    }
}

class Walk implements IMoving { //thành phần cấp thấp
    public wayOfMoving(): string {
        return `Đi bọoooooooooo`
    }
}

class Animals { //thành phần cấp cao
    private name: string;
    private sound: string;
    private mover: IMoving;

    public constructor(name: string, sound: string, mover: IMoving) {
        this.name = name;
        this.sound = sound;
        this.mover = mover;
    }

    public makeSound(): string {
        return `Kêu ${this.sound}`;
    }

    public wayOfMoving(): string {
        return `Đi bằng ${this.mover.wayOfMoving()}`
    }
}

const dog = new Animals('Chó', 'Gâu gâu', new FourLegs());
const bird = new Animals('Gà', 'Chip chip', new TwoLegs());
const gorrila = new Animals('Khỉ đột', 'zzzzzzzzzzzz', new Walk());

console.log(dog.wayOfMoving()); // Output: Chó Di chuyển bằng chân
console.log(bird.wayOfMoving());
console.log(gorrila.wayOfMoving());


//liskov substitution principle 
class Order {
    id: number;
    items: string[];

    constructor(id: number, items: string[]) {
        this.id = id;
        this.items = items;
    }
}

class ConfirmedOrder extends Order {
    payed: boolean;

    constructor(id: number, items: string[], payed: boolean) {
        super(id, items); // Call the parent class constructor to initialize the 'id' property
        this.payed = payed
    }

    public markAsPaid(): string {
        this.payed = true;
        return `${this.payed} + 1`
    }
}

const order1 = new ConfirmedOrder(123, ['banh', 'keo'], true)

console.log(order1.markAsPaid())

//Single responsibility principle
//below is the bad code
// class Student {
//     id: number;
//     name: string;
//     courseId: number;
//     courseName: string;
//     courseSubjects: string[];

//     // constructor

//     getCourseSubjects(): string {
//         return this.courseSubjects.join(", ");
//     }
// }

//-> fix : 
class Student {
    id: number;
    name: string;
    course: Course;

    // constructor
}

class Course {
    id: number;
    name: string;
    subjects: string[];

    constructor(id: number, name: string, subjects: string[]) {
        this.id = id
        this.name = name
        this.subjects = subjects
    }

    getCourseSubjects(): string {
        return this.subjects.join(", ");
    }
}

const course = new Course(1234, "lập trình", ["văn", "thể", "mỹ"])
console.log(course.getCourseSubjects())

//Open/Closed Principle in TypeScript:The idea behind this principle is that existing classes should be extended but not modified.
//below is bad code


const storeSet = new Set();

function Counter() {

    const windowsize = useSize();

    console.log("width: ",windowsize[0])
    console.log("height: ",windowsize[1])

    const handleOpen = () => {
        console.log('button lcicked');
    };

    const [count, setCount] = useState(0);
    const [countOther, setCountOther] = useState(0);
    //mỗi thành phần re render sẽ tạo lại phiên bản hoàn toàn mới của các hàm được tạo ra 
    //khi một thành phần re render mọi hàm bên trong nó đều bị
    const increase = useCallback(() => setCount(count + 1), [count]);
    const decrease = useCallback(() => setCount(count - 1), [count]);

    const increaseOther = useCallback(() => setCountOther(countOther + 1), [countOther]);
    const decreaseOther = useCallback(() => setCountOther(countOther + 1), [countOther]);

    const { data, loading, error } = useFetch('https://dummyjson.com/users');

    storeSet.add(increase);
    storeSet.add(decrease);
    storeSet.add(increaseOther);
    storeSet.add(decreaseOther);

    console.log(storeSet);

    return (
        <>
            <div>Count: {count}</div>
            <button onClick={increase} className='bg-red-300 p-3'>+</button>
            <button onClick={decrease} className='bg-blue-300 p-3'>-</button>

            <div>Count other: {countOther}</div>
            <button onClick={increaseOther} className='bg-red-300 p-3'>+</button>
            <button onClick={decreaseOther} className='bg-yellow-300 p-3'>-</button>

            <Button
                onClick={handleOpen}
                className={'bg-red-300 hover:bg-yellow-300'}
                type={'button'}
                title={'Open modal'}
                disabled={false}
            >
                {/* children */}
                Open modal
            </Button>

            <EmptyImage
                width={120}
                height={200}
                className=''
            />

        </>
    )
}

export default Counter;