fn main() {
    fn findNumber() ->  f32 {
        const startingMoney:  f32 = 10.0;
        const nLevels: i64 = 100000;
        const gainOnWin:  f32 = 8.0;
        const loseOnLoss:  f32 = 4.0;

        let mut topResult:  f32 = 0.0;
        let mut bottomResult:  f32 = 0.0;

        for i in 0..nLevels {
            for j in 0..i+1 {
                if startingMoney + ((j as  f32)*(gainOnWin + loseOnLoss)) - ((i as  f32)*loseOnLoss) < 0.0 {
                    topResult += 1.0;
                }
                else {
                    bottomResult+= 1.0;
                }
            }
        }

        let result:  f32 = bottomResult/topResult;
        return result;
    }
    println!("{}", findNumber());
}