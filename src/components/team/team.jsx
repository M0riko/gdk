import React from 'react';
import './team.scss'
import Alex1 from '../../img/member/alex.jpg'
import Andrey from '../../img/member/andrey.jpg'
import Bogdan from '../../img/member/bogdan.jpg'
import Alex2 from '../../img/member/sanya.jpg'
import Andre from '../../img/member/andre.jpg'
const Team = () => {
    return (
        <div className="team" id="team">
            <h2>Команда</h2>
            <div className="team_stack">
                <div className="team_member">
                    <div className="team_member_img">
                        <img src={Andrey} alt="img"/>
                    </div>
                    <h3>Андрій <br/> керівник проектів, дизайнер, <br/> full-stack developer</h3>
                    <p>Відповідає за комунікацію з клієнтами та координацію проектів...</p>
                </div>
                <div className="team_member">
                    <div className="team_member_img">
                        <img src={Alex1} alt="img"/>
                    </div>
                    <h3>Олександр <br/> керівник проектів, дизайнер, генератор ідей</h3>
                    <p>Відповідає за комунікацію з клієнтами та координацію проектів...</p>
                </div>
                <div className="team_member">
                    <div className="team_member_img">
                        <img src={Andre} alt="img"/>
                    </div>
                    <h3>Андрій <br/> керівник проектів, дизайнер, генератор ідей</h3>
                    <p>Відповідає за комунікацію з клієнтами та координацію проектів...</p>
                </div>
                <div className="team_member">
                    <div className="team_member_img">
                        <img src={Bogdan} alt="img"/>
                    </div>
                    <h3>Богдан <br/> керівник проектів, дизайнер, генератор ідей</h3>
                    <p>Відповідає за комунікацію з клієнтами та координацію проектів...</p>
                </div>
                <div className="team_member">
                    <div className="team_member_img">
                        <img src={Alex2} alt="img"/>
                    </div>
                    <h3>Олександр <br/> керівник проектів, дизайнер, генератор ідей</h3>
                    <p>Відповідає за комунікацію з клієнтами та координацію проектів...</p>
                </div>
            </div>
        </div>
    );
};

export default Team;