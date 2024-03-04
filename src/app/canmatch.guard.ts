import { CanMatchFn, UrlSegmentGroup, defaultUrlMatcher, Router} from '@angular/router';

export const canmatchGuard: CanMatchFn = (route, segments) => {

  var id: any;
  const matcher = route.matcher || defaultUrlMatcher;

  const matchResult = matcher(
    segments,
    new UrlSegmentGroup(segments,{}),
    route
  );  

    if(matchResult?.posParams)
      id = matchResult?.posParams['id'].path

    if(id == '1') {
      return true
    }
    
    const router = new Router();
    window.alert('Você não tem acesso a este usuário!');
    router.navigate(['/']);
    return false;
};
