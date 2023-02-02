package Question2;

class StackTest {
    private int array[];
    private int iIop;
    private int iCapacity;

    /**
     * Constructor
     * 
     * @param {int} size
     */
    StackTest(int size) {
        array = new int[size];
        iCapacity = size;
        iIop = -1;
    }

    /**
     * Add element 'x' to stack
     * 
     * @param {int} x
     */
    public void push(int x) {
        if (isFull()) {
            System.out.println("stack overflow");
            System.exit(-1);
        }

        System.out.println(x + " has been pushed into stack!");
        array[++iIop] = x;
    }

    /**
     * Pop the top element out of stack
     * 
     * @param {} none
     */
    public int pop() {
        if (isEmpty()) {
            System.out.println("stack underflow");
            System.exit(-1);
        }

        return array[iIop--];
    }

    /**
     * Find index of "x" in stack
     * 
     * @param {} none
     */
    public void findElement(int x) {
        int index = 0;

        if (isEmpty()) {
            System.out.println("stack underflow");
            System.exit(-1);
        }

        for (int arr : array) {
            if (arr == x) {
                System.out.println("Find x in: " + index);
            }

            index++;
        }
    }

    /**
     * return the size of the stack
     * 
     * @param {} none
     */
    public int size() {
        return iIop + 1;
    }

    /**
     * check the stack is empty or not
     * 
     * @param {} none
     */
    public boolean isEmpty() {
        boolean checkEmpty = (iIop == -1);
        return checkEmpty;
    }

    /**
     * check the stack is full or not
     * 
     * @param {} none
     */
    public boolean isFull() {
        boolean checkFull = (iIop == iCapacity - 1);
        return checkFull;
    }
}

class Main {
    public static void main(String[] args) {
        StackTest stack = new StackTest(4);

        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(2);
        stack.findElement(2);

        System.out.println("The stack size: " + stack.size());

        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();

        if (stack.isEmpty()) {
            System.out.println("stack is empty");
        } else {
            System.out.println("stack is not empty");
        }
    }
}