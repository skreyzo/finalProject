"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "News",
      [
        {
          id: "1",
          title: "Supreme Court rejects Trump request on Mar-a-Lago documents",
          body: "Much of the Republican primary season has revolved around Trump, who has used the intraparty contests to try to dislodge those he holds grudges against and elevate many inexperienced candidates who have embraced his false claims about the 2020 election being stolen from him. Many races have hinged on which candidate hews mostly closely to the former president’s divisive positions. The Supreme Court on Thursday refused to reinstate Judge Aileen M. Cannons. The results have been mixed. Trump failed in his bid to unseat Georgia Gov. Brian Kemp (R) for certifying Joe Biden’s 2020 election win, but found success in preventing House Republicans who voted to impeach him last year from returning to Congress. (Only two of the 10 who cast that vote are nominees in the general election.). Trump’s influence will face a new test in the fall, after his endorsements boosted candidates who some Republicans think could complicate the GOP push to win back control of Congress. Among those candidates is Mehmet Oz, the celebrity doctor trailing in the polls in Pennsylvania’s Senate race. Trump will campaign for Oz and GOP gubernatorial nominee Doug Mastriano on Sept. 3.",
          pic: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/BB4ZIKBI5MI63KIK7TSACXP4R4.jpg&w=916",

          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          id: "2",
          title: "Most Md. voters say elementary school discussion of acceptance inappropriate",
          body: 'Most Maryland voters do not support public school teachers discussing acceptance of LGBTQ people with elementary school students, according to a Washington Post-University of Maryland poll.  But a majority do support teachers having those discussions with older students. Fast, informative and written just for locals. Get The 7 DMV newsletter in your inbox every weekday morning. By more than 2 to 1 (66 percent to 30 percent), more registered voters say it is inappropriate rather than appropriate for teachers to discuss acceptance of LGBTQ people with students in kindergarten through third grade. For students in grades 4 and 5, 40 percent of voters say the discussions are appropriate, and 56 percent say it is inappropriate.  Over half, 54 percent of voters, say such discussions are appropriate for middle school, and 69 percent say they are appropriate in high school. A separate nationwide poll by the University of Southern California found a similar pattern, with about 6 in 10 Americans saying high school students should learn about topics related to gender identity or sexual orientation, compared with fewer than 3 in 10 saying the same for elementary school students.', 
          pic: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/AHJ6GPGZGQI6ZPQXFBQWJF2MKQ.jpg&w=916",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "3",
          title: "Voters divided amid intense fight for control of Congress, poll finds",
          body: 'At this point, both sides are highly motivated to turn out in November. Among registered Democratic voters, 3 in 4 say they are almost certain to vote compared with about 8 in 10 Republicans. Independents are less motivated. Four years ago, Democrats were about as mobilized as Republicans and had a clear lead in overall support. Eight years ago, when Democrats suffered losses, Republicans were more motivated. Historical trends have favored Republicans throughout this election year, and political forecasters still rate the GOP as likely to win the House. Earlier predictions of big GOP gains have been clouded by the Supreme Court’s decision in June to overturn Roe v. Wade, spurring on abortion rights supporters, especially younger women. Legislative victories by Democrats and the defeat of a Kansas antiabortion referendum over the summer also appeared to boost morale among some Democrats.',
          pic: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ARMC72XHMMI6ZJBCCG53SHNTBM.jpg&w=916",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "4",
          title: '2024 meets 2022: Trump, Pence, others ramp up for allies in midterms',
          body: 'DES MOINES — Mike Pence smiled through rain and hail at the Iowa State Fair as he campaigned for a traditional conservative senator on the ballot this fall — and teased his own potential run in a state that has long kicked off the GOP presidential nominating process. “My family and I will do as weve always done, and that is reflect and pray on where we might next serve,” the former vice president said. On the same day, Florida Gov. Ron DeSantis was in battleground Pennsylvania campaigning for a far-right nominee for governor. DeSantis recounted his battles with “establishment Republicans” and “the corporate media,” as well as the culture wars in which he and the nominee both have eagerly fought. Just as DeSantis’s event got underway, Donald Trump’s political organization announced his own rally for the “Pennsylvania Trump Ticket” on Labor Day weekend. The nominees he plans to promote are among a slew of polarizing candidates that more broadly includes election deniers and newcomers the former president has helped push through primaries. Some Republicans worry their nominations could cost the GOP crucial seats.',
          pic: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/6WEJWQBAJMI63HHGNASTXUYYMQ.jpg&w=916",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("News", null, {});
  },
};
