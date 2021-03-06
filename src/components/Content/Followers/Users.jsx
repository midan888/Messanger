import React from "react";
import css from './User.module.css'
import avatar from '../../../assets/img/avatar.png'
import {NavLink} from "react-router-dom";
import Paginator from "../../Common/Paginator/Paginator";

let Users = ({currentPages, selectedPage, onPageChanged, totalItemsCount, pageSize, ...props}) => {
    return <div className={css.wrapper}>
        <div className={css.users}>
            {
                props.users.map(u => <div key={u.id} className={css.card}>
                    <div className={css.userBlock}>
                        <NavLink to={`/profile/${u.id}`}>
                            <img src={u.photos.small != null ? u.photos.small : avatar} alt="#" className={css.avatar}/>
                        </NavLink>
                        <h3 className={css.userName}>{u.name}</h3>
                        <span className={css.country}>u.address.city</span>
                        <div className={css.infoBlock}>
                            <span>12 likes</span>
                            <span>15 views</span>
                        </div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.unfollow(u.id)
                                      }} className={css.unfollow}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.follow(u.id)
                                      }} className={css.follow}>Follow</button>}
                    </div>
                </div>)
            }
        </div>
        <div className={css.paginator}>
            <Paginator currentPages={currentPages} selectedPage={selectedPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalItemsCount} pageSize={pageSize}/>
        </div>

    </div>
}

export default Users