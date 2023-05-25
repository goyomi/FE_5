// 자료구조에서의 insertion 삽입과 배열에서의 push푸시는 다름 ! 삽입한다는 것은 위치 상관없이 넣을 수 있다는 것이고 push는 배열의 맨 뒤에만 가능

// * 주의!!! 배열(Array)의 삽입(Insertion)과 추가(Push)는 서로 다른 개념입니다.

//     배열의 삽입(Insertion)
//     배열의 삽입은 배열의 특정 위치에 요소를 추가하는 작업을 말합니다.
//     이 작업은 새로운 요소를 배열 중간이나 특정 인덱스에 삽입하는 경우에 사용됩니다.
//     삽입 작업을 수행하려면 기존 요소들을 오른쪽으로 이동시켜 공간을 만들어야 합니다.
//     예를 들어, 만약 배열 [1, 2, 3, 4, 5]에 인덱스 2에 10을 삽입한다면, 결과는 [1, 2, 10, 3, 4, 5]가 됩니다.
//     배열의 삽입은 시간 복잡도가 O(n)입니다. 왜냐하면 삽입 위치 이후의 모든 요소들을 이동시켜야 하기 때문입니다.

//     배열의 추가(Push)
//     배열의 추가는 배열의 끝에 새로운 요소를 추가하는 작업을 말합니다.
//     이 작업은 배열의 크기를 동적으로 관리하는 동적 배열(Dynamic Array)에서 주로 사용됩니다.
//     추가 작업은 배열의 마지막에 요소를 삽입하여 배열의 길이를 1만큼 증가시킵니다.
//     예를 들어, 만약 배열 [1, 2, 3]에 4를 추가한다면, 결과는 [1, 2, 3, 4]가 됩니다.
//     배열의 추가는 평균적으로 시간 복잡도가 O(1)입니다. 동적 배열의 경우, 추가 작업이 배열의 크기를 초과하게 되면 더 큰 배열을 할당하고 기존 요소들을 복사해야 하므로 최악의 경우에는 O(n)의 시간 복잡도가 발생할 수도 있습니다.
//     따라서, 배열의 삽입과 추가는 다른 개념이며, 삽입은 중간이나 특정 위치에 요소를 추가하는 작업을 의미하고, 추가는 배열의 끝에 요소를 추가하는 작업을 의미합니다.


const testArray = [1, 2, 3, 4];
testArray.push(5); // O(1)
testArray.pop(); // O(1)

// 배열의 맨 앞에 요소 추가 unshift
testArray.unshift(0);
// 다른 요소에 영향을 미침 => 인덱스가 하나씩 밀림 
// 데이터가 길어지면 길어질수록 밀어야할 인덱스가 많아짐 => 처리해야할 게 많음 => 선형시간(Liner time) O(n)의 속도가 걸린다 

testArray.splice(2, 1, 6) // O(1) ~ O(n)
console.log(testArray)
// (몇번째 자리에, 몇개지울꺼니, 지운자리에 뭐를 넣을거니)
// 가변적임. 맨 뒤에 넣을 경우 영향을 안미치지만 맨 앞에 넣으면 모든 요소에 영향을 미침