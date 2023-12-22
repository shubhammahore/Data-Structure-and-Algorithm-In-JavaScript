class RemoveElement {
    public int removeElement(int[] nums, int val) {
        int n = nums.length;
        int index = 0;
        for (int i = 0; i < n; i++) {
            if (nums[i] != val) {
                nums[index] = nums[i];
                index++;
            }

        }
        return index;
    }

    public static void main(String[] args) {
        int[] nums = { 3, 2, 2, 3 };
        int val = 3;
        new RemoveElement().removeElement(nums, val);
        for (int i : nums) {
            System.out.println(i);
        }
    }
}