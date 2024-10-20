fn main() {
    fn findNumber() ->  f64 {
        const startingMoney:  f64 = 10.0;
        const nLevels: i64 = 100000;
        const gainOnWin:  f64 = 5.0;
        const loseOnLoss:  f64 = 4.0;

        let mut topResult:  f64 = 0.0;
        let mut bottomResult:  f64 = 0.0;

        for i in 0..nLevels {
            for j in 0..i+1 {
                if startingMoney + ((j as  f64)*(gainOnWin + loseOnLoss)) - ((i as  f64)*loseOnLoss) < 0.0 {
                    bottomResult += 1.0;
                }
                else {
                    topResult+= 1.0;
                }
            }
        }

        let result:  f64 = topResult/bottomResult;
        return result;
    }
    println!("{}", findNumber());
}