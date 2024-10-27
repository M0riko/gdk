import React from 'react';
import './team.scss'
import Alex1 from '../../img/member/alex.jpg'
import Andrey from '../../img/member/andrey.jpg'
import un from '../../img/member/unnamed.png'
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
                        <img src={un} alt="img"/>
                    </div>
                    <h3>Андрій <br/> керівник проектів, дизайнер, генератор ідей</h3>
                    <p>Відповідає за комунікацію з клієнтами та координацію проектів...</p>
                </div>
                <div className="team_member">
                    <div className="team_member_img">
                        <img src={un} alt="img"/>
                    </div>
                    <h3>Богдан <br/> керівник проектів, дизайнер, генератор ідей</h3>
                    <p>Відповідає за комунікацію з клієнтами та координацію проектів...</p>
                </div>
                <div className="team_member">
                    <div className="team_member_img">
                        <img src={un} alt="img"/>
                    </div>
                    <h3>Андрій <br/> керівник проектів, дизайнер, генератор ідей</h3>
                    <p>Відповідає за комунікацію з клієнтами та координацію проектів...</p>
                </div>
            </div>
        </div>
    );
};

export default Team;